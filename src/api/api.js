import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '6a99922c-faed-48ad-a3b7-0c3244de7a01',
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
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        );
    },
    updateStatus(userStatus) {
        return (
            instance.put('profile/status', {
                status: userStatus,
            })
            .then(response => {
                return response.data
            })
        );
    }
}

export const loginAPI = {
    updateLogin(data) {
        return (
            instance.post('/auth/login', {
                email: data.login,
                password: data.password,
                rememberMe: data.rememberMe ? true : false,
            })
            .then(response => {
                if (response.resultCode === 0) {
                    console.log(response);
                    return response.data
                }
            })
        )
    }
}