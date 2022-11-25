import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carrousel-image">
        <img src={image} alt="" className="w-full  rounded-xl" />
      </div>
      <div className=" invisible md:visible lg:visible absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="md:text-6xl md:font-bold text-white">
          Buy <br /> best Used <br /> Bikes
        </h1>
      </div>
      <div className="invisible md:visible lg:visible  absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
        <p className="md:text-xl text-white">
          Buy your favourite bikes from us.it will cost less and you will find
          the fresh product
        </p>
      </div>
      <div className="invisible md:visible lg:visible  absolute flex justify-end transform -translate-y-1/2 w-2/5   top-3/4">
        <Link to="/categorie">
          <PrimaryButton>Get Started</PrimaryButton>
        </Link>
        <Link to="/buy">
          <button className="btn btn-outline btn-info">Latest Project</button>
        </Link>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
