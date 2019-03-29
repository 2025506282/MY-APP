import * as user from './action-type'
import { message } from 'antd'
const initState = {
    isLoginSuccess: false,
    isRegisterSuccess: false
}
export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case user.LOGIN:
            if (action.data.status) {
                message.success('登陆成功')
                sessionStorage.setItem('user', action.data.model)
                const newState = Object.assign({}, state, action.data)
                newState.isLoginSuccess = true
                return { ...newState, ...action }
            } else {
                message.error('用户名或者密码错误')
                return { ...state, ...action }
            }
        case user.REGISTER:
            if (action.data.status) {
                message.success('注册成功')
                sessionStorage.setItem('user', action.data.model)
                const registerState = Object.assign({}, state)
                registerState.isRegisterSuccess = true
                return { ...registerState, ...action }
            } else {
                message.error(action.data.message)
                return { ...state, ...action }
            }
        default:
            return state
    }
}