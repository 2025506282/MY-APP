import * as mail from './action-type.js'
import mailApi from '@/api/mailApi'
// 发送邮箱验证码
export const sendCode = (data)=> {
    // 返回一个函数dispatch函数
    return dispatch => {
        try {
            mailApi.sendCode(data).then((res)=>{
                dispatch({
                    type: mail.SEND_CODE,
                    data: res
                })
            })
        } catch(err){
            console.log(err)
        }
    }
}