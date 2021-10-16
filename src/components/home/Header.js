import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className='welcome'>
        <span className='head'>Welcome to</span>
        <img src='/images/simplwhite.svg' alt='Logo' className='logo' />
      </div>
      <p className='account'>2 active accounts</p>
      <div className='card-container'>
        <div className='card'>
          <img className='card-image' src='/images/simpl.svg' alt='' />
          <p>Spent till now</p>
          <p>₹1800</p>
          <div>
            <p>Bill overdue</p>
          </div>
          <p>Due date</p>
          <p>15th August</p>
          <button>Pay 1500</button>
        </div>
        <div className='card'>
          <img src='/images/simpl.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
