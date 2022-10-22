import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const products = 'https://jsonplaceholder.typicode.com'

const localURL = 'http://10.0.2.2:5000'
const onlineURL = 'http://192.168.1.101:5000'





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
            method: 'post',
            url: `${onlineURL}/ad/add`,
            data: fData,
          })
            .then((response, status) => {
              console.log(response);
              
            })
            .catch(function (error) {
              console.log(error);
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
   
   
}