import { useState } from "react";
import "./Navbar.scss"

function Navbar() {
    const [active, setActive] = useState(false);
    return (
        <nav>
            <div className='left'>
                <a href='/' className='logo'> 
                    <img src='/logo.png' alt='logo' />
                    <span>BigRealestate</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
            </div>
            <div className='right'>
                <a href="/login">Sign In</a>
                <a href="/register" className="register">Sign Up</a>
                <div className={active ? "hamMenu active" : "hamMenu"} onClick={() => setActive(!active)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={active ? "mobileMenu active" : "mobileMenu"}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href="/login">Sign In</a>
                    <a href="/register">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;