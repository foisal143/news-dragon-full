import React from 'react';
import Header from '../../components/sharedPages/Header/Header';
import RightNav from '../../components/RightNav/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Footer from '../../components/Footer/Footer';

const NewsDetails = () => {
  const singleNews = useLoaderData();
  const { category_id, title, image_url, details } = singleNews;

  return (
    <div>
      <Header></Header>
      <div className="flex gap-5 mt-12 justify-center">
        <div className="w-2/3 md:px-12  ">
          <h4 className="text-2xl font-semibold">Dragon News</h4>
          <div className="card rounded bg-base-100 mt-5">
            <figure>
              <img src={image_url} alt={title} />
            </figure>
            <div className="card-body p-1">
              <h2 className="card-title my-5 text-2xl">{title}</h2>
              <p>{details}</p>
            </div>
            <Link to={`/category/${category_id}`}>
              <button className="btns my-5 w-fit flex items-center gap-3">
                {' '}
                <FaArrowLeft></FaArrowLeft> All news in this category
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/4 ">
          <RightNav></RightNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NewsDetails;
