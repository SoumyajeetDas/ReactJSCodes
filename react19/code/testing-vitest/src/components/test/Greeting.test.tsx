import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greeting from '../Greeting';
import '@testing-library/jest-dom';

describe('Greeting', () => {
  it('should render correctly', () => {
    render(<Greeting name={'Pedro'} />);
    expect(screen.getByText(/Pedro/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello, Pedro!/i)).toBeInTheDocument();
  });
});
