import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
const Header = () => {
  return (
    <header>
      <div className="text-center">
        <img className="mx-auto my-5" src={logo} alt="" />
        <p className="text-[#706f6f] text-xl">
          Journalism Without Fear or Favour
        </p>
        <p className="text-[#403f3f]">{moment().format('MMMM, Do, YYYY')}</p>
      </div>
    </header>
  );
};

export default Header;
