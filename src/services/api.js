import axios from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


export const api = {
    getAlbums: async () => {
        let response = await http('/albums')
        return response.data
    },
    getAlbum: async () => {
        let response = await http(`/albums/1`)
        return response.data
    },
    getPhotosFromAlbum: async () => {
        let response = await http(`/albums/1/photos`);
        return response.data
    },
    getPhoto: async (id) => {
        let response = await http(`/photos/${id}`);
        return response.data
    }
}