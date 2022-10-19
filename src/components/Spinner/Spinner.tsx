import React, { Component } from 'react';
import style from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={style.spinnerWrapper}>
      <div className={style.spinner}></div>
    </div>
  );
}

export default Spinner;
