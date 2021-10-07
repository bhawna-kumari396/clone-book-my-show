import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

import MovieHero from "../components/MovieHero/MovieHero.component";

const Movie = () => {
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
      </div>
    </>
  );
};

export default Movie;
