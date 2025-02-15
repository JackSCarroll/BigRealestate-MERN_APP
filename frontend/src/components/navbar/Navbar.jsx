import { useState } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState(false);
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
                <Link to={'/register'}>Sign Up</Link>
                <Link className="register" to={'/login'}>Sign In</Link>
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