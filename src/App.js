import React,{ useEffect } from 'react';
import './App.css';

import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Payment from './Components/Payment/Payment.js';
import Checkout from './Components/Checkout/Checkout.js';
import Login from './Components/Login/Login.js'
import Orders from './Components/Orders/Orders.js';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { auth } from './firebase/Firebase';
import { useStateValue } from './State/Stateprovider';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51MgsHjEJQAQAYFtbaN4T1p3l5xtvucWn5dIi88nBG0cetGFl5lyVQWJE68SwNYPC44uLCRQw3hqVOawiKoA1xJUo00HL6Fil8N');

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
          <Route exact path='/orders'
            element={
              <>
                <Header/>
                <Orders/> 
              </>
            }
          />
          <Route exact path='/payment'
            element={
              <>
                <Header/>
                <Elements stripe={promise}>
                  <Payment/> 
                </Elements>
                
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
