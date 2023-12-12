import React from 'react';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';
import bg from '../../assets/bg.png';

import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
const RightNav = () => {
  return (
    <div className="">
      <h4 className="text-2xl font-semibold">Login With</h4>
      <div className="my-5">
        <button className="w-full border flex justify-center items-center p-2 rounded-md border-sky-400 text-sky-400">
          <FaGoogle className="me-2" /> Login With Goolge
        </button>

        <button className="w-full my-2 border flex justify-center items-center p-2 rounded-md border-slate-400 text-slate-400">
          <FaGithub className="me-2" /> Login With Github
        </button>
      </div>
      <div className="mt-8">
        <h4 className="text-2xl font-semibold">Find Us</h4>
        <div className="my-5">
          <p className="border rounded-md p-2 flex items-center border-slate-400">
            <FaFacebook className="text-blue-500 me-2 "></FaFacebook> facebook
          </p>
          <p className="border-s border-e rounded-md p-2 flex items-center border-slate-400">
            <FaTwitter className="text-blue-500 me-2 "></FaTwitter> twitter
          </p>
          <p className="border rounded-md p-2 flex items-center border-slate-400">
            <FaInstagram className="text-red-500 me-2 "></FaInstagram> instagram
          </p>
        </div>
      </div>
      <div className="bg-slate-100">
        <h4 className="text-2xl px-2 font-semibold">Q-Zone</h4>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
      <div className="relative ">
        <img className="w-full h-96" src={bg} alt="" />
        <div className="absolute top-20 text-center text-white">
          <h4 className="text-3xl">Create an Amazing Newspaper</h4>
          <p className="p-3">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btns">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
