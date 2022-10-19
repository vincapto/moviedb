import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './Search.module.scss';
import Button from '../Button/Button';

interface InputProp {
  handler: (x: string) => void;
  onClick: (value: string) => void;
}

function Search({ handler, onClick }: InputProp) {
  const [searchValue, setSearchValue] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputValue = event.target.value;
    setSearchValue(() => inputValue);
    // handler(inputValue);
  };

  const setToStorage = (value: string, name = 'searchValue') => {
    console.log('SET VALUE', value, name);
    localStorage.setItem(name, JSON.stringify(value));
  };

  const clickHandler = () => {
    if (searchValue !== null) {
      setToStorage(searchValue, 'query');
      setToStorage(searchValue);
      onClick(searchValue);
    }
  };

  const getFromStorage = (name = 'searchValue') => {
    const saved = localStorage.getItem(name);
    const initialValue = saved ? JSON.parse(saved) : '';
    return initialValue;
  };

  useEffect(() => {
    setSearchValue(getFromStorage());
  }, []);

  return (
    <div className={style.searchWrapper}>
      <input
        className={style.input}
        title="Search bar"
        onChange={changeHandler}
        defaultValue={getFromStorage()}
        placeholder="Search"
        type="search"
        name="search"
        id=""
      />
      <Button buttonText="Search" onClick={clickHandler}></Button>
    </div>
  );
}

export default Search;
