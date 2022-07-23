// context api to scope value in the componet tree for use any in its children
//context store for custom username
import { createContext } from 'react';
export const UserContext = createContext({ user: null, username: null });