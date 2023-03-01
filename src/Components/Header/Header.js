import React from 'react';

import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import cart from './cart.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../State/Stateprovider';
import { auth } from '../../firebase/Firebase'; 

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
    }
    
    return (
        <div className='header'>
            
            <Link to='/'>
                <img className='header_logo' 
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>

            <div className='header_search'>
                <input className='header_searchInput' type='txt'/>
                <SearchIcon className='header_searchIcon'/>
            </div>

            <div className='header_nav'>

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className='header_option'>
                        <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& orders</span>
                    </div>
                </Link>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header_cart">
                        <span className="header_cart_number">{basket?.length}</span>
                        <img
                        src={cart}
                        alt=''                 
                        className="header_cart_img"
                        />
                        <span className="header_optionLineTwo">Cart</span>
                    </div>
                </Link>

            </div>
            
        </div>
    );
}

export default Header;
