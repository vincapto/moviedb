import React from 'react';
import style from './Pagination.module.scss';
import { useState, useEffect } from 'react';
import '../../Context/MyContext.jsx';

interface IPagination {
  handler: (page: number) => void;
  count: number;
  current: number;
}
const size = 5;

const getRangeBetween = (count: number, current: number) => {
  const list = [...new Array(size - 2).fill(current).map((a, key) => ~~a + ~~key), '...', count];
  return list;
};

const Pagination = ({ count, handler, current }: IPagination) => {
  const itemList =
    count <= size
      ? new Array(size).fill(current).map((a, key) => ~~a + ~~key)
      : getRangeBetween(count, current);
  return (
    <div className={style.Pagination}>
      {itemList.map((item, key) => {
        const className = item === current ? `${style.item} ${style.itemActive}` : style.item;
        return (
          <div
            className={className}
            key={key}
            onClick={() => {
              const number = item !== '...' ? item : ~~current + 3;
              handler(~~number);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
