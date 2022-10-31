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
    register: async (name,email,password,state,telMaskedOff,cep) => {
        let data = {
            name,
            email,
            password,
            state,
            celular: telMaskedOff,
            cep
        }
        let response = await axios.post(`${onlineURL}/user/signup`,data)
        return response.data
    },
    getUser: async () => {
        let token = await AsyncStorage.getItem('token')
        let response = await axios.get(`${onlineURL}/user/me?token=${token}`)
        return response.data
    },
    putUserName: async (changedName) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            'name': changedName
        }
        let response = await axios.put(`${onlineURL}/user/me?token=${token}`,data)
        return response.data
        
    },
    putUserEmail: async (changedEmail) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            'email': changedEmail
        }
        let response = await axios.put(`${onlineURL}/user/me?token=${token}`,data)
        return response.data
        
    },
    putUserState: async (changedState) => {
        let token = await AsyncStorage.getItem('token')
        let data = {
            'state': changedState
        }
        let response = await axios.put(`${onlineURL}/user/me?token=${token}`,data)
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
    






    getAllProducts: async () => {
        let response = await axios.get(`${onlineURL}/ad/list`)
        return response.data
    },
    getItem: async (id) => {
        let token = await AsyncStorage.getItem('token')
        let response = await axios.get(`${onlineURL}/ad/item?token=${token}&&id=${id}`)
        return response.data
    },
    putItemTitle: async (changedTitle,id) => {
        let token = await AsyncStorage.getItem('token')
        let request = {
            'title':changedTitle,
            token
        }
        let response = await axios.post(`${onlineURL}/ad/${id}`,request)
        return response.data
    },
    putItemPrice: async (unmaskedPrice,id) => {
        let token = await AsyncStorage.getItem('token')
        let request = {
            'price':unmaskedPrice,
            token
        }
        let response = await axios.post(`${onlineURL}/ad/${id}`,request)
        return response.data
    },
    putItemDesc: async (changedDesc,id) => {
        let token = await AsyncStorage.getItem('token')
        let request = {
            'desc':changedDesc,
            token
        }
        let response = await axios.post(`${onlineURL}/ad/${id}`,request)
        return response.data
    },
    putItemState: async (changedState,id) => {
        let token = await AsyncStorage.getItem('token')
        let request = {
            'state':changedState,
            token
        }
        let response = await axios.post(`${onlineURL}/ad/${id}`,request)
        return response.data
    },
    putItemStatus: async (changedStatus,id) => {
        let token = await AsyncStorage.getItem('token')
        let request = {
            'status':changedStatus,
            token
        }
        let response = await axios.post(`${onlineURL}/ad/${id}`,request)
        return response.data
    },
   
   
   
}