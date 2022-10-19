import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { movieListData } from '../../../data';
import { IMovie } from '../../../model';

describe('Buttom should display', () => {
  test('check for text', () => {
    render(<Button buttonText="show" onClick={() => {}} />);
    expect(screen.getByText(/show/i)).toBeInTheDocument();
  });
});
