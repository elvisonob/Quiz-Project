import React from 'react';
import Flag from './../British-flag.jpg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.Header}>
      <h2>British Quiz</h2>
      <img src={Flag} alt="" width="20%" height="40%" />
    </div>
  );
};

export default Header;
