import { rest } from 'msw';
import { server } from '../../../mocks/server';
import OrderConfirmation from '../OrderConfirmation.jsx';
import { render, screen } from '../../../../test-utils/testing-utils.jsx';

test('handles errors if the api does not work', async () => {
  server.resetHandlers(
    rest.post(
      'http://localhost:3030/api/v1/order/addOrder',
      (req, res, ctx) => {
        return res(ctx.status(500));
      },
    ),
  );

  // There is no requirement to pass props to OrderConfirmation component.
  render(<OrderConfirmation />);

  const alert = await screen.findByRole('alert');
  expect(alert).toBeInTheDocument();
});
