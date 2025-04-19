import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Counter from '../../Counter/Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('increments counter on button click', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increment/i });
    const counterValue = screen.getByTestId('counter-value');

    expect(counterValue.textContent).toEqual('0');

    await user.click(button);

    expect(counterValue.textContent).toEqual('1');

    await userEvent.click(button);

    expect(counterValue.textContent).toEqual('2');
  });
});
