import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/user.png';
const Navbar = () => {
  return (
    <nav className="flex my-12 items-center">
      <div className="w-fit flex gap-5 mx-auto">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Career</Link>
      </div>
      <div className="flex gap-3">
        <img className="w-10 h-10 rounded-full" src={profile} alt="" />
        <button className="btn-login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
