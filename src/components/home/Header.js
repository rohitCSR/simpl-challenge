import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
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
          <p className='card-spent'>Spent till now</p>
          <p className='card-amount'>₹1800</p>

          <p className='card-bill-text'>BILL OVERDUE</p>
          <p className='card-dd-text'>DUE DATE</p>
          <p className='card-dd'>15 Aug</p>
          <button className='card-button'>
            <span className='card-button-pay'>PAY ₹1500</span>
          </button>
        </div>
        <div className='card'>
          <img className='card-image-2' src='/images/paylater.png' alt='' />
          <p className='card-spent'>Spent This Month</p>
          <p className='card-amount'>₹1150</p>
          <div>
            <AiOutlineQuestionCircle className='card-icon' />
            <a className='card-link' href='#'>
              FAQ
            </a>
            <div className='card-desc'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
