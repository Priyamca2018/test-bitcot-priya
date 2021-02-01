import React from 'react';
import '../app.css';
import AppleStoreIcon from  '../assets/store/app-store.svg';
import PlayStoreIcon from '../assets/store/play-store.svg'
import WindowStoreIcon from '../assets/store/windows-store.svg'

import { FbIcon, InstaIcon, TwitterIcon } from "../Util/icon"
export default function Footer({}) {
    return(
        <div className = "footer-container" >
          <div className = "footer-inner-container">
            <div className = "footer-pages-info">
              <p class="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">Term And Condition</a>
                |
                <a href="#">Privacy Policy</a>
                |
                <a href="#">Collection Statement</a>
                |
                <a href="#">Help</a>
                |
                <a href="#">Manage Account</a>
              </p>
            </div> 
            <div className = "copyright-text">
              <p>Copyright © 2016 DEMO Streaming.All rights Reserved </p>
            </div> 
            <div className = "social-login">
              <div className = "social-login-cont">
                <div>
                  <FbIcon color = {'#fff'} />
                </div>
                <div>
                  <InstaIcon color = {'#fff'} />
                </div>
                <div>
                  <TwitterIcon color = {'#fff'} />
                </div>
              </div>
              <div className = "social-login-cont">
               
              <div className="download-icons">
                  <a>
                    <img alt="app store" src= {AppleStoreIcon} width="150" height="50" />
                  </a>
                  <a>
                    <img alt="play store" src= {PlayStoreIcon} width="150" height="50" />
                  </a>
                  <a>
                  <img alt="windows store" src= {WindowStoreIcon} width="150" height="50" />
                  </a>
              </div>
                </div>
              </div>
            </div>
          </div>
    )
}