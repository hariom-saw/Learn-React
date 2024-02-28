import { LOGO_URL } from '../utils/constant';
export const Header = () => {
    return (
        <div className="app-hearder">
            <div className="site-logo">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="app-nav">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;