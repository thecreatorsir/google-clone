import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function Search({ buttonhidden = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    console.log("enter pressed", input);
    history.push("/search");
    e.preventDefault();
  };

  return (
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className='search__inputIcon' />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!buttonhidden ? (
        <div className='search__buttons'>
          <Button type='submit' onClick={search} variant='outlined'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className='search__buttons'>
          <Button
            className='search__buttonhidden'
            type='submit'
            onClick={search}
            variant='outlined'
          >
            Google Search
          </Button>
          <Button className='search__buttonhidden' variant='outlined'>
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
