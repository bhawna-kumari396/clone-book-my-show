import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

export const Premier = () => {
  const settings = {
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slideToScroll: 2,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slideToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
        },
      },
    ],
  };

  const PremierImages = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg",
      alt: "resis",
      title: "Resistence",
      subtitle: "In English",
    },

    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg",
      alt: "tbl",
      title: "The Balkan Line",
      subtitle: "In English",
    },

    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137316-jlvpmlrpyw-portrait.jpg",
      alt: "tn",
      title: "The Next",
      subtitle: "In English",
    },

    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
      alt: "tswk",
      title: "The Secret We Keep",
      subtitle: "In English",
    },

    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpg",
      alt: "cap",
      title: "Capone",
      subtitle: "In English",
    },

    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg",
      alt: "spacecraft",
      title: "Proximity",
      subtitle: "In English",
    },
  ];
  return (
    <>

    <div className="flex flex-col items-start">
      <h3 className="text-white text-xl font-bold">Premiers</h3>
      <p className="text-white text-sm">Brand New Release Every Friday</p>
    </div>


      <Slider {...settings}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark />
        ))}
      </Slider>
    </>
  );
};

export default Premier;
