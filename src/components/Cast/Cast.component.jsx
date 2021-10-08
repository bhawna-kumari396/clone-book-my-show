import React from "react";


const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col item-center">
        <div className="w-32 h-32">
          <img
            src={props.image}
            alt="crewman"
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-lg  text-gray-800">{props.castName}</h1>
        <h5 class="text-sm text-gray-400">as {props.role}</h5>
      </div>
    </div>
  );
};

export default Cast;
