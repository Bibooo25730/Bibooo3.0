import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '../header/Header';
import EssayList from '../essayList/EssayList';
import list from './list.module.css'
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            < Header full={fullpageApi}/>
          </div>
          <div className="section">
          <EssayList/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);
export default Fullpage