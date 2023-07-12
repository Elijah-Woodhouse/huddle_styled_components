import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Browser } from 'bonjour-service';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
