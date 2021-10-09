import axios from "axios";
import React, { useState, useEffect } from "react";


//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config

import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  const[popularMovies, setPopularMovies] = useState([]);
  const[topRatedMovies, setTopRatedMovies] = useState([]);
  const[upcomingMovies, setUpcomingMovies] = useState([]);


useEffect(() => {
  const requestPopularMovies = async () => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);

  };
  requestPopularMovies();
}, []);

console.log(popularMovies);

useEffect(() => {
  const requestTopRatedMovies = async () => {
    const getTopRatedMovies = await axios.get("/movie/top_rated");
    setTopRatedMovies(getTopRatedMovies.data.results);

  };
  requestTopRatedMovies();
}, []);

console.log(topRatedMovies);


useEffect(() => {
  const requestUpcomingMovies = async () => {
    const getUpcomingMovies = await axios.get("/movie/upcoming");
    setUpcomingMovies(getUpcomingMovies.data.results);

  };
  requestUpcomingMovies();
}, []);

console.log(upcomingMovies);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-24">
          <h1 className="text-2xl font-bold text-gray-700 my-6">
            THE BEST OF ENTERTAINMENT
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bms-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Brand new Relases Every Friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={upcomingMovies}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={topRatedMovies}
          title="Outdoor Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={upcomingMovies}
          title="Popular Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={topRatedMovies}
          title="Laughter Therapy"
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
