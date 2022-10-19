import style from './Main.module.scss';
import GridList from '../../components/GridList/GridList';
import { IMovie } from '../../model';
import { getData, getUrl, fetchGenreList } from '../../getData';

import React, { ChangeEvent, Component, useEffect, useState } from 'react';
import Search from '../../components/common/Search/Search';
import Spinner from '../../components/Spinner/Spinner';
import Pagination from '../../components/Pagination/Pagination';

function Main() {
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState(false);
  const [page, setPage] = useState({ current: 1, count: 1 });
  const [sort, setSort] = useState('popularity.desc');

  const getQuery = (discover = true, search = '', sortBy = '', page = 1) => {
    setStatus(true);
    fetch(getUrl(discover, search, sortBy, page.toString()))
      .then((response) => {
        const status = response.status !== 200;
        setStatus(status);
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setMovieList(() => {
          return json.results;
        });
        setPage((state) => {
          return { ...state, count: json.total_pages };
        });
        return json;
      });
  };

  const getFromStorage = () => {
    const saved = localStorage.getItem('query');
    const initialValue = saved ? JSON.parse(saved) : '';
    console.log('from storage');
    return initialValue;
  };

  const paginationHandler = (page: number) => {
    setPage((state) => {
      console.log(state, page);
      return { ...state, current: page };
    });
    getQuery(true, '', sort, page);
  };

  useEffect(() => {
    getFromStorage() !== '' ? getQuery(false, getFromStorage()) : getQuery();
    const genreList = async () => {
      const resp = await fetchGenreList();
      setGenreList(() => {
        return resp;
      });
    };
    genreList();
  }, []);

  const handler = (search: string) => {
    setSearchQuery(search);
  };

  const searchHandler = (searchValue: string) => {
    console.log('CLICKED');
    getQuery(false, searchValue);
  };

  useEffect(() => {
    getQuery(true, '', sort);
  }, [sort]);

  console.log('RENDER');
  return (
    <>
      <div className={style.main}>
        <h1 className={style.title}>Movie List </h1>
        <Search handler={handler} onClick={searchHandler} />
        <select
          title="sort"
          name="sortSelect"
          onChange={(event) => {
            setSort(event.target.value);
            console.log('CURRENT SORT', sort);
          }}
        >
          <option value={'popularity.desc'}>Popularity Desc</option>
          <option value={'popularity.asc'}>Popularity Asc</option>
          <option value={'release_date.desc'}>Date Desc</option>
          <option value={'release_date.asc'}>Date Asc</option>
        </select>
        {movieList.length !== 0 ? (
          <>
            <GridList genreList={genreList} movieList={movieList as IMovie[]} />
            <Pagination handler={paginationHandler} current={page.current} count={page.count} />
          </>
        ) : (
          <div className={style.loadWrapper}>
            {!status && movieList.length === 0 ? 'No results' : <Spinner></Spinner>}
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
