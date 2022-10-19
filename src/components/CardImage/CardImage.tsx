import React, { Component } from 'react';
import style from './CardImage.module.scss';

interface CardImageProp {
  posterPath: string;
  title: string;
}

interface CardImageState {
  posterPath: string;
  title: string;
}

export default class CardImage extends Component<CardImageProp, CardImageState> {
  constructor(props: CardImageProp) {
    super(props);
    this.state = {
      posterPath: `https://image.tmdb.org/t/p/original/${props.posterPath}`,
      title: props.title,
    };
  }
  render() {
    return (
      <div className={style.imageWrapper}>
        <img
          className={style.cardImage}
          src={`https://image.tmdb.org/t/p/original/${this.props.posterPath}`}
          alt={this.props.title}
        />
      </div>
    );
  }
}
