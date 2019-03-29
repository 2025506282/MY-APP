import request from './request'
const api = {
    register: '/user/register',
    login: '/user/login'
}
export default {
    register(data) {
        return request.post(api.register, data)
    },
    login(data) {
        return request.post(api.login, data)
    }
}