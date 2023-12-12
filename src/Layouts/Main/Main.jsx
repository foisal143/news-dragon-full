import React from 'react';
import Header from '../../components/sharedPages/Header/Header';
import { Outlet } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import { useLoaderData } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import LeftNav from '../../components/LeftNav/LeftNav';
import RightNav from '../../components/RightNav/RightNav';
import Footer from '../../components/Footer/Footer';
const Main = () => {
  const category = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className="lg:px-12 my-8">
        <div className="bg-slate-100 px-5 h-20 flex justify-between items-center">
          <button className="btns">Latest</button>

          <Marquee speed={100}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
        <Navbar></Navbar>
        <div className="flex gap-5">
          <div className="w-1/4 ">
            <LeftNav category={category}></LeftNav>
          </div>
          <div className="w-1/2 ">
            <Outlet></Outlet>
          </div>
          <div className="w-1/4 ">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
