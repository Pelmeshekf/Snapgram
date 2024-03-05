import { INewUser } from './../../types/index';
import { useMutation } from '@tanstack/react-query';
import { createUserAccount, signInAccount } from '../appwrite/api';

export const useCreateUserAccount = () => {
  return useMutation('createUser', (user: INewUser) => createUserAccount(user));
};

export const useSignInAccount = () => {
  return useMutation('signInAccount', (user: { email: string; password: string }) => signInAccount(user));
};
