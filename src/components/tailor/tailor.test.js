import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tailor from './Tailor';

describe('<Tailor />', () => {
  test('it should mount', () => {
    render(<Tailor />);
    
    const tailor = screen.getByTestId('Tailor');

    expect(tailor).toBeInTheDocument();
  });
});