import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

import Linkedin_image from "../images/linkedin_image.png"
import styles from "./header.module.scss"
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div>
    <div className={styles.header_left + "  header__left d-flex mb-2"}>
      <img src={Linkedin_image} className=''/>
      <div className='header_search'>
        <SearchIcon/>
        <input type="text"/>
      </div>
    </div>
    <div className="header_right">
      <HeaderOption Icon ={HomeIcon} title ="Home"/>
    </div>
    </div>
  )
}

export default Header