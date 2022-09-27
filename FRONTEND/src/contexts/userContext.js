import { useNavigation } from "@react-navigation/native";
import React,{ useState, createContext} from "react";
import { useEffect } from "react";
import { api } from "../services/api";



export const UserContext = createContext({})


export const UserProvider = ({children}) => {

    const navigation = useNavigation()
    const [photo,setPhoto] = useState([])

    const getPhoto = (uri) => {
    if(photo != undefined){
        let photoList = [...photo]
        photoList.push(uri)
        setPhoto(photoList)
        console.log(photoList)
        navigation.navigate('PostAdScreen')
    }
}

    return (
        <UserContext.Provider value={{name:'1234567',getPhoto,photo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext