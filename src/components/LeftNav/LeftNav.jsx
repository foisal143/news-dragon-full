import React from 'react';
import { Link } from 'react-router-dom';
import first from '../../assets/1.png';
import second from '../../assets/2.png';
import third from '../../assets/3.png';
import { FaCalendar } from 'react-icons/fa';
const LeftNav = ({ category }) => {
  return (
    <div>
      <h4 className="text-2xl font-semibold">All Category</h4>
      <div className="flex flex-col mt-5 gap-5">
        {category.map(cate => (
          <Link to={`/category/${cate.id}`} key={cate.id}>
            {cate.name}
          </Link>
        ))}
      </div>
      <div className="mt-5">
        {/* card */}
        <div className="card rounded bg-base-100 ">
          <figure>
            <img src={first} />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="flex justify-between items-center">
              <span>Sports</span>{' '}
              <span className="flex items-center">
                <FaCalendar className="me-2 text-gray-500"></FaCalendar> Jun 4,
                2022
              </span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card */}
        <div className="card my-8 rounded bg-base-100 ">
          <figure>
            <img src={second} />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="flex justify-between items-center">
              <span>Sports</span>{' '}
              <span className="flex items-center">
                <FaCalendar className="me-2 text-gray-500"></FaCalendar> Jun 4,
                2022
              </span>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card */}
        <div className="card rounded bg-base-100 ">
          <figure>
            <img src={third} />
          </figure>
          <div className="card-body p-1">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>

            <div className="flex justify-between items-center">
              <span>Sports</span>{' '}
              <span className="flex items-center">
                <FaCalendar className="me-2 text-gray-500"></FaCalendar> Jun 4,
                2022
              </span>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default LeftNav;
