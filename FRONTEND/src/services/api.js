import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const products = 'https://jsonplaceholder.typicode.com'

const localURL = 'http://10.0.2.2:5000'
const onlineURL = 'http://192.168.1.107:5000'





export default {
    getToken: async () => {
       return await AsyncStorage.getItem('token')
    },
    validateToken: async () => {
        let token = await AsyncStorage.getItem('token')
        let response = await axios.get(`${onlineURL}/user/me`,token)
        return response.data
    },
    loginLocal: async (email,password) => {
        let data = {
            email,
            password
        }
        let response = await axios.post(`${onlineURL}/user/signin`,data)
        return response.data
        
    },
    logout: async () => {
        let token = await AsyncStorage.removeItem('token')
        return token
    },
    register: async (name,email,password,state) => {
        let data = {
            name,
            email,
            password,
            state
        }
        let response = await axios.post(`${onlineURL}/user/signup`,data)
        return response.data
    },
    getUser: async () => {
        let token = await AsyncStorage.getItem('token')
        let response = await axios.get(`${onlineURL}/user/me?token=${token}`)
        return response.data
    },
    postNewAd: async (title,price,priceneg,desc,cat,photo) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            title,
            price,
            priceneg,
            desc,
            cat,
            photo,
            token
        }
        let response = await axios.post(`${onlineURL}/ad/add`,data)
        return response.data
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