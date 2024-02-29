import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

export const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    // if No dependency array => useEffect is called on every render.
    // if dependency array is empty = [] => useEffect is called on intial render(just once)
    // id dependency array is [loginBtn] => called everytime "loginBtn" is updated

    useEffect(() => {
        console.log("Header useEffect is called when 'loginBtn' is updated ");
    }, [loginBtn]);

    return (
        <div className="app-hearder">
            <div className="site-logo">
                <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="app-nav">
                <ul className="nav-items">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about"> About Us </Link></li>
                    <li><Link to="/contact"> Contact Us </Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                        ('Login' == loginBtn) ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;