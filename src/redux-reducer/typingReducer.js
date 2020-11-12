import { SET_TYPING_VALUE } from '../Component/Constant/action-types';
import { SEND_MESSAGE } from '../Component/Constant/action-types';
// eslint-disable-next-line
export default  (state = '', action) => {
    switch(action.type){
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return '';
        default:
            return state;
    }
};
