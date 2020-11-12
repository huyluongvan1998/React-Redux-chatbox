import users from './userReducer';
import contacts from './contactReducer';
import activeUserId from './activeUserIdReducer';
import messagesReducer from '../redux-reducer/messagesReducer';
import { combineReducers } from 'redux';
import typingReducer from '../redux-reducer/typingReducer';

const rootReducer = combineReducers({
    users: users,
    contacts: contacts,
    activeUserId: activeUserId,
    messages: messagesReducer,
    typing: typingReducer
})

export default rootReducer;