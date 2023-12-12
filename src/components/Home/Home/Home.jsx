import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import News from '../News/News';

const Home = () => {
  const categoryNews = useLoaderData();
  return (
    <div className="">
      {categoryNews.length === 26 ? (
        <h4 className="text-2xl font-semibold">Dragon news home</h4>
      ) : (
        <h4 className="text-2xl font-semibold">
          Category news: {categoryNews.length}
        </h4>
      )}
      <div className="my-5 h-[173vh]  scroll-hidden overflow-scroll">
        {categoryNews &&
          categoryNews.map(news => <News key={news._id} news={news}></News>)}
      </div>
    </div>
  );
};

export default Home;
