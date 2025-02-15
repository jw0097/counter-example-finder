import React from 'react';
import { render, screen } from '../utils/test-utils';
import App from '../App';

describe('jest test', () => {
  test('jest test example', () => {
    expect(2 + 2).toBe(4);
  });

  test('RTL test example', () => {
    render(<App />);
    const headerElement = screen.getByText('Find Counter Example');
    expect(headerElement).toBeInTheDocument();
  });
});
