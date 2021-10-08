import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

//component
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config
import TempPosters from "../config/TempPosters.config";

const Movie = () => {


  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          InitialSlide: 2,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  

  return (
    <>
      <MovieHero />
      <div className="my-12 container mx-auto px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col item-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About The Movie</h2>
          <p>
            A young NASA JPL scientist is abducted by extraterrestrials but when
            no one believes his story he becomes obsessed with finding proof
            which leads him on a journey of discovery.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        {/*-------------------------------------------------------------------------*/}

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get Rs.50* off on 3 movies you buy/rent on Stream. Buy Visa
                  Stream @Rs.99
                </p>
              </div>
            </div>

            {/*---------------------------------------------------------------------------------- */}

            <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full " />
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Filmy Pass Offer
                </h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="my-8">
          <hr />
        </div>

        {/*---------------------------------------------------------------------------------- */}


        <div className="my-8">
        <h2 className="text-gray-800 font-bold text-2xl mb-8">Cast & Crew</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <Cast
            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ryan-masson-2010831-11-01-2021-07-38-30.jpg"
            castName="Henry Cavil"
            role="Issac"
          />
          <Cast
            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/highdee-kuan-2010832-11-01-2021-07-39-44.jpg"
            castName="Highdy Kuan"
            role="Sara"
          />
          <Cast
            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/christian-prentice-2011263-11-01-2021-07-42-14.jpg"
            castName="Christian Prentice"
            role="Zed"
          />
          <Cast
            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/eric-demeusy-2010833-11-01-2021-07-43-30.jpg"
            castName="Eric Demeusy"
            role="Director"
          />
          <Cast
            image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/junkie-xl-1043901-09-03-2018-03-36-05.jpg"
            castName="Junkie XL"
            role="Musicien"
          />
        </div>
        </div>
        <div className="my-8">
          <hr />
        </div>

{/*------------------------------------------------------------------------------------------ */}


        <div className="my-8">
        <PosterSlider
        config={settings}
          images={TempPosters}
          title="You Might Also Like"
          isDark={false}
        />
        </div>
        <div className="my-8">
        <PosterSlider
        config={settings}
          images={TempPosters}
          title="BMS Xclusive"
          isDark={false}
        />
        </div>
      </div>
    </>
  );
};

export default Movie;
