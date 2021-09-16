import React from "react";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

const HomePage = () => {
  return (
    <>
    <div className="container mx-auto px-24">
      <h1 className="text-2xl font-bold text-gray-700 my-6">THE BEST OF ENTERTAINMENT</h1>
      <EntertainmentCardSlider />
      </div>
    </>
  );
};

export default HomePage;
