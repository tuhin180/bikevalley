import React from "react";
import AdvertisedProduct from "../../components/AdvertisedItem/AdvertisedProduct";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedProduct></AdvertisedProduct>
      <Categories></Categories>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
