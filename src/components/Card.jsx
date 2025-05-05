import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, desc, img}) => {
  return (
    // <a href={url}>
      <div className="bg-white lg:min-w-3/12 lg:min-h-[280px] h-fit p-10 shadow-md rounded mx-5 lg:m-0 lg:hover:-translate-y-5 transition-all duration-300 cursor-pointer">
        <div style={{ color: "#00B1E1", fontSize: "36px" }}>{img}</div>

        <h1 className="lg:text-2xl text-lg font-semibold mt-3 mb-5">{title}</h1>
        <p className="lg:text-base text-sm text-zinc-700">{desc}</p>
      </div>
    // </a>
  );
};

export default Card;
