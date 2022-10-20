import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState = {
    token: '',
    ads:[],
    email:'',
    name:'',
    state:'',
    photo:''
    
}
export default (state=initialState,action = {}) => {

    switch(action.type){
        case 'setToken':
            AsyncStorage.setItem('token',action.payload.token)
            return {...state,token: action.payload.token}
        break
        case 'setEmail':
            return {...state,email: action.payload.email}
        break
        case 'setName':
            return {...state,name: action.payload.name}
        break
        case 'setState':
            return {...state,state: action.payload.state}
        break
        case 'setAds':
            return {...state,ads: action.payload.ads}
        break
        case 'setPhoto':
            return {...state,photo: action.payload.photo}
        break
    }


    return state
}