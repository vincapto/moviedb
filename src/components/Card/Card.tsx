import React, { Component, useState } from 'react';
import style from './Card.module.scss';
import { IMovie } from '../../model';
import Button from '../common/Button';
import CardImage from '../CardImage';
import popularityIcon from '../../images/42302d4e7bb78cb1b1d1c4e921fc5a14.svg';
import voteCount from '../../images/vote-8.svg';
import bookMark from '../../images/icons8-bookmark.svg';
import MovieItem from '../movieItem/MovieItem';

interface ICardProp {
  movie: IMovie;
}

function Card({ movie }: ICardProp) {
  const [show, setShow] = useState(false);

  const togglePopup = () => {
    setShow(() => !show);
  };
  return (
    <>
      <div className={style.cardWrapper}>
        <CardImage title={movie.title} posterPath={movie.poster_path} />
        <div className={style.cardHead}>
          <h3 className={style.cardTitle}>{movie.title}</h3>
          <div className={style.cardSubhead}>
            <div className={style.cardRate}>
              <span>{movie.vote_average}</span>
            </div>
            <div className={style.bookmark}>
              <img src={bookMark} alt="add to watch later" />
            </div>
          </div>
        </div>

        <div className={style.statsWrapper}>
          {movie.release_date}
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
        <Button
          buttonText="Show more"
          styleProp={{ width: '100%', display: 'flex' }}
          onClick={() => {
            togglePopup();
          }}
        />
      </div>
      {show ? <MovieItem movie={movie} closePopup={togglePopup} /> : <></>}
    </>
  );
}

export default Card;
