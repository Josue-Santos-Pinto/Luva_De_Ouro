import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const slice = createSlice({
    name: 'user',
    initialState:{
        token: '',
        user: {}
    },
    reducers:{
        setToken: (state,action) => {
            
            state.token = action.payload
            AsyncStorage.setItem(state.token)
        },
        setUser: (state,action) => {
            state.password = action.payload
        }
    }
})
export const { setToken, setUser} = slice.actions
export default slice.reducer