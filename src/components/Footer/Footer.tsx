import React, { Component } from 'react';
import style from './Footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.footerContent}>
          <h3 className={style.title}>Footer</h3>
        </div>
      </div>
    );
  }
}
