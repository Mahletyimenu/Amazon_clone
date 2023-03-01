import React,{ useEffect } from 'react';
import './App.css';

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout.js';
import Login from './Components/Login/Login.js'
import { auth } from './firebase/Firebase';
import { useStateValue } from './State/Stateprovider';

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("user", authUser);

      if (authUser) {
        dispatch(
          {
            type: "SET_USER",
            user: authUser,
          }
        );
      } else {
        dispatch(
          {
            type: "SET_USER",
            user: null,
          }
        );
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/login'
            element={<Login/> }
          />
          <Route exact path='/checkout'
            element={
              <>
                <Header/>
                <Checkout/> 
              </>
            }
          />
          <Route exact path='/'
            element={ 
              <>
                <Header/>
                <Home/>
              </>
            }
          />
        </Routes>
      </div>   
    </Router>
  );
}

export default App;
