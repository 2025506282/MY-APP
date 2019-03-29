import * as mail from './action-type.js'
export const mailReducer = (state = [],action) => {
    switch(action.type) {
        case mail.SEND_CODE:
        return {...state,...action}
    }
}