import React from 'react';
import { render, screen } from '@testing-library/react';
import GridList from './GridList';
import { renderWithRouter } from 'utils';
import { movieListData } from '../../data';
import style from './GridList.module.scss';

describe('check list render', () => {
  test('render with empty movie list', async () => {
    renderWithRouter(<GridList movieList={[]} />);
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });
  test('check for not empty', async () => {
    renderWithRouter(<GridList movieList={[...movieListData].splice(0, 3)} />);
    expect(screen.queryByText(/Something went wrong/i)).not.toBeInTheDocument();
  });
  test('render movie list with 2 elements', async () => {
    const { container } = renderWithRouter(
      <GridList movieList={[...movieListData].splice(0, 2)} />
    );
    expect(container.getElementsByClassName('cardWrapper').length).toEqual(2);
  });
});
