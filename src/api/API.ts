import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",

});


export const getUsers = (currentPage: number, pageSize: number) => {
    return (
        instance.get( `users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        })
            .then(response => response.data)
    )
}