import request from './request'
const api = {
    sendCode: '/mail/send'
}
export default {
    sendCode(data) {
        return request.post(api.sendCode, data)
    }
}