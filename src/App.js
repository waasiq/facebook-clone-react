import React from 'react';

import './css/App.css';

import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Feed from './Components/Feed.js';
import Login from './Components/Login.js'

import { useStateValue } from './Context/StateProvider';

// BEM Convention to follow 

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className ="App">
        {!user ? (
            <Login />
        ) : 
          (     
            <>                  
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
            </div>   
            </>   
          )
        }
       
     
    </div>
  );
}

export default App;
