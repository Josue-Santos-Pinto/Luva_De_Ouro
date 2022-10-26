import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosRequestConfig } from "axios";

const products = 'https://jsonplaceholder.typicode.com'

const localURL = 'http://10.0.2.2:5000'
const onlineURL = 'http://192.168.1.102:5000'




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
    register: async (name,email,password,state,tel) => {
        let data = {
            name,
            email,
            password,
            state,
            tel
        }
        let response = await axios.post(`${onlineURL}/user/signup`,data)
        return response.data
    },
    getUser: async () => {
        let token = await AsyncStorage.getItem('token')
        let response = await axios.get(`${onlineURL}/user/me?token=${token}`)
        return response.data
    },
    putUserAll: async (name,email,cep) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            name:name ,
            email:email ,
            state: cep ,
            token
        }
        let response = await axios.put(`${onlineURL}/user/me`,data)
        return response.data
    },
    putUserName: async (name) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            name:name ,
            token
        }
        let response = await axios.put(`${onlineURL}/user/me`,data)
        return response.data
    },
    putUserEmail: async (email) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            email:email ,
            token
        }
        let response = await axios.put(`${onlineURL}/user/me`,data)
        return response.data
    },
    putUserCep: async (cep) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            state: cep ,
            token
        }
        let response = await axios.put(`${onlineURL}/user/me`,data)
        return response.data
    },
    getStates:  async () => {
        let response = await axios.get(`${onlineURL}/states`)
        return response.data
    },
    getCategories: async () => {
        let response = await axios.get(`${onlineURL}/categories`)
        return response.data
    },
    postNewAd: async (fData) => {
       
        axios({
            method: "post",
            url: "http://192.168.1.102:5000/ad/add",
            data: fData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            }); 
        
    },
    






    getAlbums: async () => {
        let response = await axios.get(`${onlineURL}/ad/list`)
        return response.data
    },
    getItem: async (id) => {
        let token = await AsyncStorage.getItem('token')
        let response = await axios.get(`${onlineURL}/ad/item?token=${token}&&id=${id}`)
        return response.data
    },
    putItem: async (data,id) => {
        let token = await AsyncStorage.getItem('token')
        let request = {
            data,
            token
        }
        let response = await axios.post(`${onlineURL}/ad/${id}`,request)
        return response.data
    },
   
   
   
}