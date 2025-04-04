import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { DarkModeToggle } from "../../components/darkModeToggle/darkModeToggle";

function Layout(){

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  return (
      <div className='layout'>
          <div className='navbar'>
            <Navbar/>
            <DarkModeToggle 
              darkModeActive={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
          </div>
          <div className='content'>
            <Outlet/>
          </div>
      </div>
  )
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
    if (!currentUser) return <Navigate to="/login"/>;
    else {
      return (
        <div className='layout'>
          <div className='content'>
            <Outlet/>
          </div>
        </div>
      );
    }
}

export {Layout, RequireAuth};