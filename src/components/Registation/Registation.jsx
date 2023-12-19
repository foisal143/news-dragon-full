import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { UserContext } from '../../AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Registation = () => {
  const { createUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const handlerSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(re => console.log(re.user))
      .catch(er => console.log(er.message));
    form.reset();
  };
  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="p-5">
        <Navbar></Navbar>
      </div>

      <div className="hero ">
        <div className="hero-content flex-col w-1/2">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Registion now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlerSubmitForm} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  <label className="label  text-xs">
                    Already have an account ?{' '}
                    <Link className="text-blue-400 ms-1" to="/login">
                      Login
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
