// use doesn't go well with , you havr to use a framework like Next JS, otherwise you will get to infinite looping or get an error
// React Suspense requires the promise to be cached. If you create a new promise on every render, React can't reuse it —
// leading to broken or infinite suspense loops.

// Reference: https://react.dev/blog/2024/12/05/react-19#new-feature-use
// Reference : https://www.youtube.com/watch?v=UUW4xS05Y6s

import { use } from 'react';

const promiseCache = new Map<string, Promise<unknown>>();

// function useQuery<T>({ key, fn }: { key: string; fn: () => Promise<T> }): T {
//   if (!promiseCache.has(key)) {
//     promiseCache.set(key, fn());
//   }

//   const promise = promiseCache.get(key) as Promise<T>;

//   const result = use(promise);

//   return result as T;
// }

const useQuery = <T,>({
  key,
  fn,
}: {
  key: string;
  fn: () => Promise<T>;
}): T => {
  if (!promiseCache.has(key)) {
    promiseCache.set(key, fn());
  }

  const promise = promiseCache.get(key) as Promise<T>;

  const result = use(promise);

  return result as T;
};

export default useQuery;
