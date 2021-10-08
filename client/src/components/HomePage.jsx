import React from 'react';
import { Redirect } from 'react-router-dom';

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('myData'));
  if (user.token !== 'undefined' && user.token !== null) {
    return (
      <div>
        Hoşgeldiniz
        {' '}
        {user.email}
        {' '}
        Bey/Bayan
      </div>
    );
  }

  return <Redirect to="/login" />;
};

export default HomePage;
