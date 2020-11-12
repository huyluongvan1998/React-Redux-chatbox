import React from "react";
import store from '../../redux-store/store';
import Header from '../../Component/Header/Header';
import Chat from '../../Component/Chat/Chat';
import _ from 'lodash';
import './chatWindow.style.css';
import MessageInput from '../MessageInput/messageInput';


const ChatWindow = ({ activeUserId }) => {
 const state = store.getState();
 const activeUser = state.contacts[activeUserId];
 const messages = state.messages;
 const activeMsgs = messages[activeUserId];
 const { typing } = state;

  console.log(activeMsgs);
  return (
    <div className="ChatWindow">
      <Header user={activeUser} messages={messages} />
      <Chat messages={_.values(activeMsgs) } />
      <MessageInput value= { typing } />
    </div>
  );
};

export default ChatWindow;