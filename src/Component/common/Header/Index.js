import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [MobileMenu, setMobileMenu]= useState(false);

const togleMobilemenu=()=>{
    setMobileMenu(!MobileMenu);
}
  return (
    <div className="moblie-menu-wrapper">
    <div className={`mobile-menu only-mobile ${MobileMenu ? "overlay" : ""} `}>
    <div className="moblie-navbar">
    <div className="mobile-nav-items">credit score check</div>
    <div className="mobile-nav-items">CRED pay</div>
    </div>
    </div>
      <div className="flex max-width header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="header-logo"
        />
        <div className="only-mobile mobile-menu-button-wrapper">
          <button className={`hamburger  hamburger--spin ${MobileMenu ? 'is-active': ""}`} type="button" onClick={togleMobilemenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-items">credit score check</div>
          <div className="header-nav-items">CRED pay</div>
        </div>
      </div>
    </div>
  )
}

export default Header
