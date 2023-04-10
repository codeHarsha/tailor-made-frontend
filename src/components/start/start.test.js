import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Start from './Start';

describe('<Start />', () => {
  test('it should mount', () => {
    render(<Start />);
    
    const start = screen.getByTestId('Start');

    expect(start).toBeInTheDocument();
  });
});