import {SET_ACTIVE_USER_ID} from '../Component/Constant/action-types';
// eslint-disable-next-line
export default (state = null, action) => {
    switch(action.type){
        case SET_ACTIVE_USER_ID:
            return action.payload;
        
        default:
            return state;
    }
}