import React from "react";
import AdvertisedProduct from "../../components/AdvertisedItem/AdvertisedProduct";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertisedProduct></AdvertisedProduct>
      <Categories></Categories>
    </div>
  );
};

export default Home;
