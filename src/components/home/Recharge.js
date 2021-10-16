import React from 'react';

const getIcons = () => {
  return [
    {
      url: '/images/prepaid.svg',
      title: 'Prepaid',
    },
    {
      url: '/images/electricity.svg',
      title: 'Electicity',
    },
    {
      url: '/images/broadband.svg',
      title: 'Broadband',
    },
    {
      url: '/images/dth.svg',
      title: 'DTH',
    },
    {
      url: '/images/cylinder.svg',
      title: 'Gas',
    },
    {
      url: '/images/landline.svg',
      title: 'Landline',
    },
    {
      url: '/images/water.svg',
      title: 'Water',
    },
    {
      url: '/images/datacard.svg',
      title: 'Datacard',
    },
  ];
};

const Recharge = () => {
  const displayIcons = getIcons();
  return (
    <div className='main-div-recharge'>
      <p className='recharge-text'>Recharge and pay bills</p>

      <div className='rectangle-line'></div>
      <div className='recharge-icons'>
        {displayIcons.map((displayIcon) => {
          const { url, title } = displayIcon;
          return (
            <div className='recharge-icon-wrapper'>
              <img className='recharge-icon' alt='' src={url}></img>
              <div className='recharge-txt'>{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recharge;
