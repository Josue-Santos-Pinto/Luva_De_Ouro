import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const products = 'https://jsonplaceholder.typicode.com'
const baseURL = 'https://api.b7web.com.br/devcond/api'
const localURL = 'http://10.0.2.2:5000'


const request = async (method,endpoint,params,token=null) => {
    method = method.toLowerCase()
    let fullUrl = `${baseURL}${endpoint}`
    let body = null

    switch(method){
        case 'get':
            let queryString = URLSearchParams(params).toString()
            fullUrl += `?${queryString}`
        break
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params)
        break
    }

    let headers = {'Content-type':'application/json'}
    if(token){
        headers.Authorization = `Bearer ${token}`
    }

    let req = await fetch(fullUrl,{method,headers,body})
    let json = await req.json()
    return json
}



//suporte.b7web@gmail.com.br


export default {
    getToken: async () => {
       return await AsyncStorage.getItem('token')
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem('token')
        let json = await request('post','/auth/validate',{},token)
        return json
    },
    login: async (cpf,password) => {
        let json = await request('post','/auth/login',{cpf,password})
        return json
    },
    loginLocal: async (email,password) => {
        let data = {
            email,
            password
        }
        let response = await axios.post(`${localURL}/user/signin`,data)
        return response.data
        
    },
    logout: async () => {
        let token = await AsyncStorage.getItem('token')
        let json = await request('post','/auth/logout',{},token)
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('property')
        return json
    },
    register: async (name,email,password,state) => {
        let data = {
            name,
            email,
            password,
            state
        }
        let response = await axios.post(`${localURL}/user/signup`,data)
        return response
    },
    getUser: async () => {
        let response = await axios.get(`${localURL}/user/me`)
        return response.data
    },
    addPhoto: async (file) => {
        let token = await AsyncStorage.getItem('token')
        let formData = new FormData()
        formData.append('photo',{
            uri: file.uri,
            type: file.type,
            name: file.fileName
        })
        let req = await fetch(`${baseURL}/warning/file`,{
            method: 'POST',
            headers: {
                'Content-Type':'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        let json = await req.json()
        return json
    },






    getAlbums: async () => {
        let response = await axios.get(`${products}/albums`)
        return response.data
    },
    getAlbum: async () => {
        let response = await axios.get(`${products}/albums/1`)
        return response.data
    },
    getPhotosFromAlbum: async () => {
        let response = await axios.get(`${products}/albums/1/photos`);
        return response.data
    },
    getPhoto: async (id) => {
        let response = await axios.get(`${products}/photos/${id}`);
        return response.data
    },
   
}