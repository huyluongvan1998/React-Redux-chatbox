import React from 'react';
import './Main.style.css';

import Empty from '../empty/empty';
import ChatWindow from '../../Container/chatWindow/chatWindow';

const main = ({ user, activeUserId}) => {
    const renderMainContent = () => {
        if(!activeUserId) {
            return <Empty user={ user } activeUserId={ activeUserId } />
        } else {
            return <ChatWindow activeUserId={activeUserId}> </ChatWindow>
        }
    } 
    return <main className='Main'> {renderMainContent()} </main>
}

export default main;
