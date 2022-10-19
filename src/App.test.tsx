import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from 'utils';

describe('check navigation', () => {
  test('click on about link ', async () => {
    const { user } = renderWithRouter(<App />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    await user.click(screen.getByText(/about/i));
    expect(screen.getByRole('heading', { name: /Something about App/i })).toBeInTheDocument();
  });

  test('click on main link ', async () => {
    const { user } = renderWithRouter(<App />);
    expect(screen.getByText(/main/i)).toBeInTheDocument();
    await user.click(screen.getByText(/movie/i));
    expect(screen.getByRole('heading', { name: /Movie List/i })).toBeInTheDocument();
  });

  test('click on about link and move back to main', async () => {
    const { user } = renderWithRouter(<App />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    await user.click(screen.getByText(/about/i));
    expect(screen.getByText(/main/i)).toBeInTheDocument();
    await user.click(screen.getByText(/main/i));
    expect(screen.getByRole('heading', { name: /Movie List/i })).toBeInTheDocument();
  });
});

describe('test search exist', () => {
  test('should contain search input', async () => {
    renderWithRouter(<App />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
