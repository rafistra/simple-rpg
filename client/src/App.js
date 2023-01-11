import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Main from './pages/Main';
import LoginPage from './pages/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = result => {
    setLoginStatus(result);
  }

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }

  }, [loginStatus])

  return (
    <div>
      {
        !loginStatus ? 
        <LoginPage loginCbHandler={loginCbHandler}></LoginPage> :
        <Main loginStatus={loginStatus} loginCbHandler={loginCbHandler}></Main>
      }
    </div>
  );
}

export default App;
