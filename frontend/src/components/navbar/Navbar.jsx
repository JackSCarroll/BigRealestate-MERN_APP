import { useState } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState(false);
    const user = true;
    return (
        <nav>
            <div className='left'>
                <a href='/' className='logo'> 
                    <img src='/logo.png' alt='logo' />
                    <span>BigRealestate</span>
                </a>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
                <Link to={'/'}>Agents</Link>
            </div>
            <div className='right'>
                {/*Check if user is logged in and show profile, otherwise show sign in/ sign up*/}
                {user ? (<div className='user'>
                    <img src='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/22/1437566053687/16df9aa9-5eb1-4ab0-87d5-b4ff14517f53-1020x612.jpeg?width=1900&dpr=1&s=none&crop=none' alt='' />
                    <span className='userName'>Brian Limmond</span>
                    <Link className='profile' to={'/profile'}>
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>) : (<> <Link to={'/register'}>Sign Up</Link>
                <Link className="register" to={'/login'}>Sign In</Link> </>)}
                <div className={active ? "hamMenu active" : "hamMenu"} onClick={() => setActive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={active ? "mobileMenu active" : "mobileMenu"}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>About</Link>
                    <Link to={'/'}>Contact</Link>
                    <Link to={'/'}>Agents</Link>
                    <Link to={'/register'}>Sign Up</Link>
                    <Link className="register" to={'/login'}>Sign In</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;