import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => render(<App />));

describe('UI Testing', () => {
  test('Should have a loading message', async () => {
    await screen.findByText('Fetching data...');
  });

  test('Should display an Not found Message', () => {
    screen.queryByText('We can not found gifs with that name 😞');
  });

  test('Should display a list of gifs', async () => {
    const images = await screen.findAllByRole('img');
    expect(images.length).toBe(10);
  });

  test('Should display a gif with title', async () => {
    await screen.findAllByRole('img');
    await screen.findAllByRole('heading');
  });
});
