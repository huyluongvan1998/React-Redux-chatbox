import React from 'react';
import './App.css';
import Main from '../../Component/Main/Main';
import Sidebar from '../../Component/Sidebar/Sidebar';
import store from '../../redux-store/store';

import _ from 'lodash';

const App = () => {
  const { contacts, users, activeUserId } = store.getState();
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)} /> 
        <Main user={ users } activeUserId={ activeUserId }/>
      </div>
    );
  }


export default App;
