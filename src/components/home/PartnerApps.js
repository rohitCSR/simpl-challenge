import React from 'react';

const getLogos = () => {
  return [
    {
      url: '/images/bigbasket.png',
      title: 'BigBasket',
    },
    {
      url: '/images/dunzo.png',
      title: 'Dunzo',
    },
    {
      url: '/images/grofers.png',
      title: 'Grofers',
    },
    {
      url: '/images/zomato.png',
      title: 'Zomato',
    },
  ];
};
const PartnerApps = () => {
  const displayLogo = getLogos();

  return (
    <div className='main-div-partner'>
      <p className='partner-text'>You can also use simpl on</p>
      <div className='partner-rectangle-line'></div>
      <div className='logo-container'>
        {displayLogo.map((logo) => {
          const { url, title } = logo;
          return (
            <div className='logo-card'>
              <img className='logo-image' src={url} alt='' />
              <p className='logo-text'>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerApps;
