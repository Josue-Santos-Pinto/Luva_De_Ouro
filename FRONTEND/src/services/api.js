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
    },
    getUser: async (id) => {
        let response = await http(`/users`);
        return response.data
    },
    addPhotoFile: async () => {
        let formData = new FormData()
        formData.append('photo',{
            uri: file.uri,
            type: file.type,
            name: file.fileName
        })
        let response = await http.post(`/posts`);
    }
}