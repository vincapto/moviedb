import React, { Component, ReactNode } from 'react';
import style from './Layout.module.scss';
import NavBar from '../NavBar';
import Footer from '../Footer';

interface LayoutProp {
  children: ReactNode;
}

export default class Layout extends Component<LayoutProp> {
  render() {
    return (
      <div className={style.body}>
        <NavBar />
        <div className={style.container}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
