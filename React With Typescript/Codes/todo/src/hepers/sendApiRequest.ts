type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

// RequestInit is a JS default interface that describes the request parameters that can be passed to the fetch function.
function returnCorrectRequest(method: Method, data: unknown): RequestInit {
  const request: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (method !== 'GET') {
    request.body = JSON.stringify(data);
  }
  return request;
}

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {
  const response = await fetch(url, returnCorrectRequest(method, data));

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const res = await response.json();

  return res.data as Promise<T>;
}
