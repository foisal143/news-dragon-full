import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/user.png';
import { UserContext } from '../../AuthContext/AuthContext';
const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const handlerLogout = () => {
    logout()
      .then(() => {})
      .catch(er => console.log(er.message));
  };
  return (
    <nav className="flex mb-12 mt-5 items-center">
      <div className="w-fit flex gap-5 mx-auto">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Career</Link>
      </div>
      <div className="flex gap-3">
        <img
          className="w-10 h-10 rounded-full"
          src={user ? user?.photoURL : profile}
          alt=""
        />
        {user ? (
          <button onClick={handlerLogout} className="btn-login">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn-login">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
