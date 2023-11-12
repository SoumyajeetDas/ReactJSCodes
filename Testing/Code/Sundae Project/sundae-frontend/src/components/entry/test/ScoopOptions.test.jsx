import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../../test-utils/testing-utils.jsx';
import ScoopOptions from '../ScoopOptions.jsx';

test('indicate if test-count is non int or out of range', async () => {
  // This prop is used to render the ScoopOptios otherwise is throwing error.
  const props = {
    item: {
      name: 'Vanilla',
      imagePath: '/images/vanilla.png',
    },
    optionType: 'scoops',
  };
  /** Create am user **/
  const user = userEvent.setup();

  /** Render ScoopOption component **/
  // Passing props was required otherwise it would have thrown error.
  render(<ScoopOptions {...props} />);

  /** expect input to be invalid with negeative number **/
  const invalidInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  await user.clear(invalidInput);
  await user.type(invalidInput, '-1');
  expect(invalidInput).toHaveClass('is-invalid');

  /** Replace with decimal part **/
  await user.clear(invalidInput);
  await user.type(invalidInput, '2.5');
  expect(invalidInput).toHaveClass('is-invalid');

  /** Replace with inputs that are too high(uptill 10 is normal) **/
  await user.clear(invalidInput);
  await user.type(invalidInput, '11');
  expect(invalidInput).toHaveClass('is-invalid');

  /** On putting valod input it should not throw error **/
  await user.clear(invalidInput);
  await user.type(invalidInput, '3');
  expect(invalidInput).not.toHaveClass('is-invalid');
});
