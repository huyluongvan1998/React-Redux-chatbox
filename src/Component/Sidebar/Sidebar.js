import React from 'react';
import './Sidebar.style.css';
import User from '../../Container/User/User';

const sidebar = ({ contacts }) => (
    <aside className="Sidebar">
        {
            contacts.map( contact => (
                <User user={contact} key={contact.user_id} />
            ))
            
        }
    </aside>
)


export default sidebar;