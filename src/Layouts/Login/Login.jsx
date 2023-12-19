import React, { useContext } from 'react';

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { UserContext } from '../../AuthContext/AuthContext';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInEmailPassword } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handlerFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInEmailPassword(email, password)
      .then(res => {
        const logeduser = res.user;
        console.log(logeduser);
        navigate(location.state.pathname);
      })
      .catch(er => console.log(er.message));
  };
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="p-5">
        <Navbar></Navbar>
      </div>

      <div className="hero ">
        <div className="hero-content flex-col w-1/2">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlerFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="w-full relative">
                  <input
                    type={show ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    className="input w-full input-bordered"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 cursor-pointer top-4"
                  >
                    {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
                <div className="flex justify-between">
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <label className="label  text-xs">
                    New in Dragon news ?{' '}
                    <Link className="text-blue-400 ms-1" to="/registation">
                      Registation
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
