import { http, HttpResponse } from 'msw';

const handlers = [
  http.get(
    'https://jsonplaceholder.typicode.com/users/:userId',
    ({ params }) => {
      const { userId } = params;
      return HttpResponse.json({
        id: userId,
        name: 'John Doe',
        email: 'john@gmail.com',
      });
    },
  ),
];
export default handlers;
