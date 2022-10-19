import React, { Component, MouseEvent } from 'react';
import style from './MovieItem.module.scss';
import { IMovie } from '../../model';
import CardImage from '../CardImage/CardImage';
import popularityIcon from '../../images/42302d4e7bb78cb1b1d1c4e921fc5a14.svg';
import voteCount from '../../images/vote-8.svg';
import bookMark from '../../images/icons8-bookmark.svg';
import closeIcon from '../../images/x_icon.png';
import { apiKey, getGenres } from '../../getData';

interface MovieItemProp {
  movie: IMovie;
  closePopup?: () => void;
}

function MovieItem({ closePopup, movie }: MovieItemProp) {
  const handleParentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      closePopup ? closePopup() : () => {};
    }
  };

  return (
    <div className={style.modal} onClick={handleParentClick}>
      <div className={style.movieItem}>
        <div className={style.close} onClick={closePopup}>
          <img src={closeIcon} alt="" />
        </div>
        <div className={style.cardWrapper}>
          <CardImage title={movie.title} posterPath={movie.poster_path} />

          <div className={style.statsWrapper}>
            <div className={style.statsCount}>
              <div className={style.popularity}>
                <img src={popularityIcon} alt="popularity" />
                <div className={style.popularityCount}></div>
                {Number(movie.popularity).toFixed(0)}
              </div>
              <div className={style.voteCount}>
                <img src={voteCount} alt="vote count" />
                <div className={style.voteCount}>{movie.vote_count}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.info}>
          <div className={style.cardHead}>
            <h3 className={style.cardTitle}>{movie.title}</h3>
            {movie.release_date}
          </div>
          <p className={style.movieDescription}>{movie.overview}</p>
          <div className={style.genreWrapper}>
            {movie?.genreList
              ? movie.genreList.map((a, key) => (
                  <div key={key} className={style.genreItem}>
                    {a}
                  </div>
                ))
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
