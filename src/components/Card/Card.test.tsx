import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { movieListData } from '../../data';
import { IMovie } from '../../model';

describe('The image component', () => {
  const card = movieListData[0] as IMovie;
  test('alt contains correct value', () => {
    render(<Card movie={card} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain(card.title);
  });
});
