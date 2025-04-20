import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Counter from '../../Counter/Counter';
import userEvent from '@testing-library/user-event';

const mockUseCounter = vi.fn();

vi.mock('../../../hooks/useCounter', () => {
  return {
    useCounter: () => {
      return {
        count: 0,
        increment: mockUseCounter,
      };
    },
  };
});

describe('Counter with mock', () => {
  it('increments counter on button click', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increment/i });
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue.textContent).toEqual('0');

    await user.click(button);

    expect(mockUseCounter).toHaveBeenCalledTimes(1);
  });
});
