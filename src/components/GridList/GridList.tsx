import React, { Component } from 'react';
import style from './GridList.module.scss';
import Card from '../Card';
import { IMovie } from '../../model';
import { movieListData } from '../../data';

interface GridListProp {
  movieList: IMovie[];
  genreList?: Record<string, string>;
}

function GridList({ movieList, genreList }: GridListProp) {
  const renderList = () => {
    return movieList.map((movie) => {
      const movieGenre = movie.genre_ids.reduce((acc: string[], next: number) => {
        const item = genreList?.[next] as string;
        return [...acc, item];
      }, []);
      movie.genreList = movieGenre.length !== 0 ? movieGenre : [];
      return <Card key={movie.id} movie={movie} />;
    });
  };

  return (
    <div className={style.gridList}>
      {movieList && movieList.length !== 0 ? renderList() : <h2>Something went wrong</h2>}
    </div>
  );
}

export default GridList;
