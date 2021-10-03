import React from "react";

const MovieHero = () => {
  return (
    <>
      <div>
        <div className="md:hidden w-full" style={{ height: "calc(180vw)" }}>
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />

          <img
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>

        <div
          className="relative hidden md:block lg:hidden"
          style={{ height: "calc(180vw)" }}
        >
          <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
          <img
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg"
            alt="poster"
            className="w-full h-full"
          />
        </div>
        <div className="relative hidden lg:block" style={{ height: "30rem" }}>
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}
          />
          <div className="absolute z-30 w-64 h-96 left-24 top-10">
            <img
              src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg"
              alt="poster"
              className="w-full h-full"
            />
          </div>
          <img
            src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg"
            alt="poster"
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
