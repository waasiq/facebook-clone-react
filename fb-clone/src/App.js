import React from 'react';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Feed from './Components/Feed.js';
import './css/App.css';

// BEM Convention to follow 

function App() {
  return (
    <div className="App">

        {/* Header */}
        <Header />

        {/* App Body */}
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* Feed */}
          {/* Widgets */}
        </div>

       
     
    </div>
  );
}

export default App;
