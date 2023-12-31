/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import { render, screen, waitFor } from '../../../../test-utils/testing-utils';
import OrderEntry from '../OrderEntry';

test('handles errors for scoops and topping routes', async () => {
    server.resetHandlers(
        rest.get(
            'http://localhost:3030/api/v1/flavour/scoops',
            async (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({
                    status: "500 Internal Server Error",
                }))
            },
        ),

        rest.get("http://localhost:3030/api/v1/topping/toppings",
            async (req, res, ctx) => {
                return res(ctx.status(500), ctx.json({
                    status: "500 Internal Server Error",
                }))
            })
    );

    render(<OrderEntry />);

    await waitFor(async () => {

        const alerts = await screen.findAllByText(/An unexpected error occured. Please try again later/i);

        expect(alerts).toHaveLength(2);

    })

});
