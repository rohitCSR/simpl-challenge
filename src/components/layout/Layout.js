import React, { useState } from 'react';

import { RiArrowUpDownFill, RiUserFill, RiFileCopy2Fill } from 'react-icons/ri';
import { CgMoreVerticalO } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const getNavLinks = () => {
  return [
    { icon: AiFillHome, text: 'Home', path: '/' },
    { icon: RiArrowUpDownFill, text: 'Passbook', path: '/passbook' },
    { icon: RiFileCopy2Fill, text: 'Billbox', path: '/billbox' },
    { icon: RiUserFill, text: 'Profile', path: '/profile' },
    { icon: CgMoreVerticalO, text: 'More', path: '/more' },
  ];
};

const Layout = (props) => {
  const { children } = props;

  const navLinks = getNavLinks();

  const { pathname } = useLocation();

  // const getIfSelected = (index, path) => {
  //   const isSelected = path === pathname;
  //   return isSelected;
  // };

  return (
    <div className='layout'>
      <div className='layout-header'></div>
      {children}
      <div className='layout-footer'>
        <div className='slider-parent'>
          {/* <div className='slider'></div> */}
        </div>
        <div className='navbar'>
          {navLinks.map((linkData, index) => {
            const { icon: Icon, text, path } = linkData;
            // const isSelectedMenu = getIfSelected(index, path);
            const isSelectedMenu = path === pathname;

            return (
              <Link
                to={path}
                className={`nav-item ${
                  isSelectedMenu ? 'nav-item-selected' : ''
                }`}
                key={text}>
                <div className='nav-icon-wrapper'>
                  <Icon className='nav-icon' />
                </div>
                <div className='nav-text'>{text}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
