import { LOGIN, REGISTER } from './actions'
export default {
    user(state, action) {
        switch (action.type) {
            case LOGIN:
                return true
            case REGISTER:
                return true
            default:
                return true
        }
    }
}