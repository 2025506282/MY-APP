// user action 类型
export const  LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const COMMON = {
    SHOW_LOADING: 'SHOW_LOADING',
    HIDE_LOADING: 'HIDE_LOADING',
}
export function login(data) {
    return { type: LOGIN, data}
}
export function register(data) {
    return { type: REGISTER, data}
}