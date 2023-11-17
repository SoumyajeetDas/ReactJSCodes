/* eslint-disable prettier/prettier */
import { rest } from 'msw';

/**
 * When MSW starts checking for the url it goes in an array way. It will check for the first url in the array. If that fails will go to 
 * next element in the array to match he endpoint. If nothing matches it will start throwing the warning "Intercepted the request without
 * a matching request handler" 
 */
export const handler = [
    rest.get('http://localhost:3030/api/v1/flavour/scoops', async (req, res, ctx) => {

        return res(
            // Delay the response by 400 ms
            ctx.delay(400),
            ctx.status(200),
            ctx.json({
                status: '200 OK',
                data: [
                    {
                        name: 'Mint chip',
                        imagePath: '/images/mint-chip.png',
                    },
                    {
                        name: 'Vanilla',
                        imagePath: '/images/vanilla.png',
                    },
                ],
            }),
        );
    }),
    rest.get('http://localhost:3030/api/v1/topping/toppings', async (req, res, ctx) => {

        return res(
            // Delay the response by 400 ms
            ctx.delay(400),
            ctx.status(200),
            ctx.json({
                "status": "200 OK",
                "data": [
                    {
                        "name": "M&Ms",
                        "imagePath": "/images/m-and-ms.png"
                    },
                    {
                        "name": "Hot fudge",
                        "imagePath": "/images/hot-fudge.png"
                    },

                ]
            }))
    }),

    rest.post('http://localhost:3030/api/v1/order/addOrder', async (req, res, ctx) => {

        return res(
            // Delay the response by 400 ms
            ctx.delay(400),
            ctx.status(201),
            ctx.json({
                status: "201 Created",
                orderNumber: 1000
            }))
    })
];
