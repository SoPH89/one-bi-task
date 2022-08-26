import React, { useEffect } from "react";
// import MovieListing from "../MovieListing/MovieListing";
import TvShowsListing from "../TvShowsListing/TvShowsListing"

import { useDispatch } from "react-redux";
import {

  fetchAsyncShows,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      {/* <MovieListing /> */}
      < TvShowsListing/>
    </div>
  );
};

export default Home;
