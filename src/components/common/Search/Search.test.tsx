import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';
import { renderWithRouter } from 'utils';

function setToStorage(value: string) {
  localStorage.setItem('searchValue', JSON.stringify(value));
}

function getFromStorage() {
  const saved = localStorage.getItem('searchValue');
  const initialValue = saved ? JSON.parse(saved) : '';
  return initialValue;
}

describe('check search input', () => {
  test('should contain value', async () => {
    render(<Search onClick={() => {}} handler={() => {}} />);
    const input: HTMLInputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });

  test('data is added into local storage', () => {
    const mockData = 'some data';
    setToStorage(mockData);
    console.log(getFromStorage());
    expect(localStorage.getItem('searchValue')).toEqual(JSON.stringify(mockData));
  });

  test('type in input and unmount', () => {
    const { unmount } = render(<Search onClick={() => {}} handler={() => {}} />);
    const input: HTMLInputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'some search value' } });
    expect(input.value).toBe('some search value');
    unmount();
    console.log(getFromStorage());
    expect(localStorage.getItem('searchValue')).toEqual(JSON.stringify('some search value'));
  });
});
