import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import UserProfile from '../UserProfile';
import { server } from '../../mocks/server';
import { http, HttpResponse } from 'msw';

describe('UserProfile', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  it('should render user profile', async () => {
    // Test implementation goes here
    render(<UserProfile userId={1} />);

    await waitFor(async () => {
      expect(await screen.findByText(/John Doe/i)).toBeInTheDocument();
    });
  });

  it('should handle loading state', async () => {
    // Test implementation goes here

    render(<UserProfile userId={1} />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    // Wait for the loading state to be removed
    waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    });

    await waitForElementToBeRemoved(() => {
      return screen.queryByText(/Loading.../i);
    });
  });

  it('should handle error state', () => {
    server.resetHandlers(
      // Mock a server error response
      http.get('https://jsonplaceholder.typicode.com/users/:userId', () => {
        return HttpResponse.json({ error: 'User not found' }, { status: 500 });
      }),
    );

    render(<UserProfile userId={1} />);

    // Check if the error message is displayed
    waitFor(() => {
      expect(screen.getByText(/Error loading user data/i)).toBeInTheDocument();
    });
  });
});
