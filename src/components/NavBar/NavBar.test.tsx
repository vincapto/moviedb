import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('check for links in menu', () => {
  test('render navigating links', async () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    expect(screen.getByText(/main/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.queryByText(/wrong/i)).not.toBeInTheDocument();
  });
});
