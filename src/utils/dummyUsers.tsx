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
  // Basic validation to check if email contains '@' and '.'
  const isValidEmail = email.includes('@') && email.includes('.') && email.lastIndexOf('.') > email.indexOf('@') + 1;

  if (!isValidEmail) {
    return false;  // Return false if the email format is not valid
  }

  // Check if there is any user that matches both email and password
  return users.some((user) => user.email === email && user.password === password);
};
