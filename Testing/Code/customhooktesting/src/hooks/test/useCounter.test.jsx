import { act, renderHook } from '@testing-library/react';
import useCounter from '../useCounter.jsx';

describe('test use cases of useCounter.jsx', () => {
  test('initially value of counter', () => {
    const { result } = renderHook(useCounter, {
      initialProps: 0,
    });

    expect(result.current[0]).toBe(0);
  });

  test('should increement', () => {
    const { result } = renderHook(useCounter, { initialProps: 0 });

    // The reason bcoz we have to use act here bcoz it is updating the state which is asyncronous in nature and by the time it is getting
    // updated the test function is finished
    act(() => result.current[1]());

    expect(result.current[0]).toBe(1);
  });

  test('should decreement', () => {
    const { result } = renderHook(useCounter, { initialProps: 0 });

    // The reason bcoz we have to use act here bcoz it is updating the state which is asyncronous in nature and by the time it is getting
    // updated the test function is finished
    act(() => result.current[2]());

    expect(result.current[0]).toBe(-1);
  });

  test('should increemnt and then decreement', () => {
    const { result } = renderHook(useCounter, { initialProps: 0 });

    act(() => result.current[1]());

    expect(result.current[0]).toBe(1);

    act(() => result.current[2]());

    expect(result.current[0]).toBe(0);
  });

  test('should decreement and then increement', () => {
    const { result } = renderHook(useCounter, { initialProps: 0 });

    act(() => result.current[2]());

    expect(result.current[0]).toBe(-1);

    act(() => result.current[1]());

    expect(result.current[0]).toBe(0);
  });
});
