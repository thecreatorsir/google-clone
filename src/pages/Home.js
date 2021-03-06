import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerleft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerright'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className='home__body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='google logo'
        ></img>
        <div className='home__inputsearch'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
