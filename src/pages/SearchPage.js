import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import { useGoogleSearch } from "../useGoogleSearch";
import { response } from "../response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //live api call
  const { data } = useGoogleSearch(term);

  //mock api call
  // const data = response;
  console.log(data);
  return (
    <div className='searchpage'>
      <div className='searchpage__header'>
        <Link to='/'>
          <img
            className='searchpage__logo'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            alt='searchpage__logo'
          />
        </Link>
        <div className='searchpage__headerbody'>
          <Search buttonhidden />

          <div className='searchpage__options'>
            <div className='searchpage__optionleft'>
              <div className='searchpage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchpage__option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='searchpage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchpage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
              </div>
              <div className='searchpage__option'>
                <RoomIcon />
                <Link to='/maps'>maps</Link>
              </div>
              <div className='searchpage__option'>
                <MoreVertIcon />
                <Link to='/more'>more</Link>
              </div>
            </div>
            <div className='searchpage__optionright'>
              <div className='searchpage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='searchpage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='searchpage__results'>
          <p className='searchpage__resultcount'>
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime}) seconds for {term}
          </p>
          {data?.items.map((item) => (
            <div className='searchpage__result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className='searchpage__resultimage'
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      atl=''
                    />
                  )}
                {item.displayLink}
              </a>
              <a className='searchpage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchpage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      <div className='searchpage__body'></div>
    </div>
  );
}

export default SearchPage;
