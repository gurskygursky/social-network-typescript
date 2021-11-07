import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "8c4a0698-b08e-4693-b5a1-2d3805a6e1dc"
    },
});

export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
    return (
        instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    )},
    follow(userID: number) {
        return (
            instance.post(`follow/${userID}`)
        )},
    unfollow(userID: number) {
        return (
            instance.delete(`follow/${userID}`)
        )
    },
}

export const HeaderAPI = {
    authMe() {
        return(
            instance.get(`auth/me`)
        )
    }
}

export const ProfileAPI = {
    selectUserProfile(userID: string) {
        return (
            instance.get(`profile/` + userID)
        )
    }
}