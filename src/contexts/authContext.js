import React,{ useState, createContext} from "react";
import { api } from "../services/api";

const initialState = {
    id: 0,
    title: '',
    userId: 0  
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({children}) => {

   
    const [items,setItems] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [albumInfo,setAlbumInfo] = useState(initialState)
    


    const loadAlbum = async () => {
        setLoading(true)
        const albumInfo = await api.getAlbum()
        setAlbumInfo(albumInfo)
        setLoading(false)
    }
    const getPhotos = async () => {
        setLoading(true)
        const photo = await api.getPhotosFromAlbum()
        setItems(photo)
        setLoading(false)
    }
   

    return (
        <AuthContext.Provider value={{id: 0,title: '',userId: 0,items ,loadAlbum,getPhotos,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext