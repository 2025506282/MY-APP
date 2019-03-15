import request from './request'
const api = {
    register: '/api/user/register',
    login: '/api/user/login'
}
export default {
    register(data) {
        return request.post(api.register, data)
    },
    login(data) {
        return request.post(api.login, data)
    }
}