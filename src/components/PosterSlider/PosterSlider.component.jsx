import React from "react";
import Slider from "react-slick";

//component

import Poster from "../Poster/poster.component";

//config
import PosterCaroselSettings from "../../config/PosterCarosel.config";

//import PremierImages from "../../config/TempPosters.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start my-2">
        <h3
          className={`text-2xl font-bold ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}
        >
          {props.title}
        </h3>
        <p className={`text-sm ${
            props.isDark ? "text-white" : "text-gray-800"
          }`}>{props.subtitle}</p>
      </div>

      <Slider {...PosterCaroselSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
