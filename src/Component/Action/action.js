import { SET_ACTIVE_USER_ID} from "../Constant/action-types";
import { SET_TYPING_VALUE} from "../Constant/action-types";
import { SEND_MESSAGE } from '../Constant/action-types';
// eslint-disable-next-line
export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});        

export const setTypingValue = inputValue => ({
  type: SET_TYPING_VALUE,
  payload: inputValue
})

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
})