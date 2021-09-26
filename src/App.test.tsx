import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Search h2', () => {
  render(<App />);
  const h2 = screen.getAllByText(/search/i)[0];
  expect(h2).toBeInTheDocument();
  expect(h2.nodeName).toBe('H2');
});
