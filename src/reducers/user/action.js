import * as user from './action-type.js'
import userApi from '@/api/userApi'
// 登陆
export const login = (data) => {
    return dispatch => {
        try {
            userApi.login(data).then((res) => {
                dispatch({
                    type: user.LOGIN,
                    data: res
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
}

// 注册
export const register = (data) => {
    return dispatch => {
        try {
            userApi.register(data).then((res) => {
                dispatch({
                    type: user.REGISTER,
                    data: res
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
}