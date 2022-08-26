import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import TvShows from "./components/TV Shows/TvShows";
import "./App.scss";
import Sidebar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <Router>
        
        <Header></Header>
        <div class="container">
          <div className="sidebar-container">
            <Sidebar/>
          </div>  
        <div className="movies-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tvshows" exact component={TvShows} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
         
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
