import moment from 'moment';
import React from 'react';
import {
  FaBookmark,
  FaEye,
  FaShare,
  FaStar,
  FaStarHalfAlt,
} from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const News = ({ news }) => {
  console.log(news);
  const { total_view, title, rating, image_url, details, author } = news;
  return (
    <div className="card mb-5 card-compact   ">
      <div className="bg-slate-200 flex items-center px-5 h-20 mb-5">
        <img className="rounded-full w-10 h-10" src={author.img} alt="" />
        <div className="flex px-3 justify-between w-full items-center">
          <div className=" ">
            <h4 className="font-semibold">{author.name}</h4>
            <p className="text-xs">
              {moment(author.published_date).format('YYYY-MM-DD')}
            </p>
          </div>
          <div className="flex gap-5">
            <FaBookmark></FaBookmark> <FaShare></FaShare>
          </div>
        </div>
      </div>
      <h2 className="card-title text-3xl my-5 text-[#403F3F]">{title}</h2>
      <figure>
        <img className="w-full" src={image_url} alt={title} />
      </figure>
      <div className="my-5">
        {details && details.length > 250 ? (
          <p>
            {details.slice(0, 250)}...
            <Link to="/" className="text-[#FF8C47]">
              Redmore
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2">
          <Rating
            placeholderRating={rating.number}
            fullSymbol={<FaStar className="text-[#FF8C47]"></FaStar>}
            placeholderSymbol={<FaStar className="text-[#FF8C47]"></FaStar>}
            emptySymbol={<FaStarHalfAlt className="text-[#FF8C47]" />}
          ></Rating>{' '}
          {rating.number}
        </span>
        <span className="flex items-center gap-2">
          <FaEye></FaEye> {total_view}
        </span>
      </div>
    </div>
  );
};

export default News;
