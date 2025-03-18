import { useContext, useState } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const [active, setActive] = useState(false);
    const { currentUser } = useContext(AuthContext);
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
                {currentUser ? (<div className='user'>
                    <img src={currentUser.avatar || "/noavatar.jpg"} alt='' />
                    <span className='userName'>{currentUser.username}</span>
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