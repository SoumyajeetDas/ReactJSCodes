import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCounter } from '../useCounter';
import { act } from 'react';

describe('useCounter', () => {
  it('should increment the counter', () => {
    // Test implementation goes here
    const result = renderHook(() => useCounter(0));

    expect(result.result.current.count).toBe(0);

    act(() => {
      result.result.current.increment();
    });

    expect(result.result.current.count).toBe(1);
  });

  it('should decrement the counter', () => {
    // Test implementation goes here

    const result = renderHook(() => useCounter(0));

    expect(result.result.current.count).toBe(0);

    act(() => {
      result.result.current.decrement();
    });

    expect(result.result.current.count).toBe(-1);
  });
});
