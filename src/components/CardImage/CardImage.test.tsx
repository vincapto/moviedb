import React from 'react';
import { render, screen } from '@testing-library/react';
import CardImage from './CardImage';
import { movieListData } from '../../data';

describe('The image component', () => {
  const card = movieListData[0];
  test('alt contains correct value', () => {
    render(<CardImage posterPath={card.poster_path} title={card.title} />);
    const testImage = document.querySelector('img') as HTMLImageElement;
    expect(testImage.alt).toContain(card.title);
  });
});
