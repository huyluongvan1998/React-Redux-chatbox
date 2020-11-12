import React from 'react';
import './User.style.css';
import store from '../../redux-store/store';
import {setActiveUserId} from '../../Component/Action/action';


const User = ({ user }) => { 
const { profile_pic, name, status} = user;

 return (
    <div className='User' onClick={handleUserClick.bind( null, user )}>
       <img className='profile-pic'
            src={ profile_pic }
            alt='error'></img>
       <div className='user-info'>
          <span> { name } </span>
          <span>{ status }</span>
       </div>
    </div>
 )  
}

const handleUserClick = ({ user_id }) => {
   store.dispatch(setActiveUserId(user_id));
}


export default User;