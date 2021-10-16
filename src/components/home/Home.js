import React from 'react';
import PartnerApps from './PartnerApps';
import Header from './Header';
import Recharge from './Recharge';

const Home = () => {
  return (
    <div className='home-page'>
      <Header />
      <Recharge />
      <PartnerApps />
    </div>
  );
};

export default Home;
