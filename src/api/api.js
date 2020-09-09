import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f30cbbde-97db-45fa-a1d2-c9f6fd8b368e",
    }
});

export const usersAPI = {
    getUsers(count, page) {
        return (
            instance.get(`users?count=${count}&page=${page}`)
            .then(response => {
                return response.data;
            })
        );
    },

    follow(id) {
        return (
            instance.post(`follow/${id}`, {})
                .then(response => {
                    return response.data;
                })
        );
    },

    unfollow(id) {
        return (
            instance.delete(`follow/${id}`)
                .then(response => {
                    return response.data;
                })
        );
        
    },
}

export const headerAPI = {
    login() {
        return (
            instance.get(`auth/me`).
                then(response => {
                    return response.data
                })
        );
    },
}

export const profileAPI = {
    setProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => {
                    return response.data
                })
        );
    }
}
