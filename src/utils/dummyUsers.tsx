// src/utils/dummyUsers.ts

export interface User {
  email: string;
  password: string;
}

const users: User[] = [
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
  { email: 'user3@example.com', password: 'password3' },
  { email: 'user4@example.com', password: 'password4' },
  { email: 'user5@example.com', password: 'password5' },
];

export const checkUser = (email: string, password: string): boolean => {
  return users.some((user) => user.email === email && user.password === password);
};
