import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('check for title', () => {
  it('should be on page', () => {
    render(<Main />);
    const title = screen.getByText(/movie list/i);
    expect(title).toBeInTheDocument();
  });
});
