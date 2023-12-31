import React from "react";
import "../../App.css";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
// import Upcoming from "./upcoming/Upcoming";

const Home = () => {
   return (
      <div className=''>
         <HeroBanner />
         <Trending />
         <Popular />
         <TopRated />
      </div>
   );
};

export default Home;
