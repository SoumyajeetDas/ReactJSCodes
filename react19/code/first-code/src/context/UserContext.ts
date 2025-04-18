import { createContext } from 'react';
import { UserContextType } from '../types/type';

export const UserContext = createContext<UserContextType | null>(null);
