import React, { Component } from 'react';
import style from './NotFound.module.scss';

export default class Main extends Component {
  render() {
    return (
      <div className={style.container}>
        <h1>Something is wrong please go back to main page</h1>
        <a href="/">main page</a>
      </div>
    );
  }
}
