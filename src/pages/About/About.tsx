import style from './About.module.scss';
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <>
        <div className={style.container}>
          <h1 className={style.text}>Something about App</h1>
        </div>
      </>
    );
  }
}
