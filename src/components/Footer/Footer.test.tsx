import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer should display', () => {
  test('check for text', () => {
    render(<Footer />);
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });
});
