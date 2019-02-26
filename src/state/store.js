import { Overmind } from 'overmind';
import { createHook } from 'overmind-react';

const store = new Overmind({
  state: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    nameConfirmed: false,
    emailConfirmed: false,
    passwordConfirmed: false,
    confirmPasswordMatch: false,
    isSignUpPage: false,
    isAuthenticated: false
  },
  effects: {},
  actions: {
    changeName: ({ value: name, state }) => {
      state.name = name;
      state.nameConfirmed = name.length > 1 ? true : false;
    },
    changeEmail: ({ value: email, state }) => {
      state.email = email;
      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const isValidated = emailRegex.test(email);
      state.emailConfirmed = isValidated ? true : false;
    },
    changePassword: ({ value: password, state }) => {
      state.password = password;
      const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
      const isValidated = passwordRegex.test(password);
      state.passwordConfirmed = isValidated ? true : false;
      const isMatchingPassword = state.confirmPassword === password && password !== '';
      state.confirmPasswordMatch = isMatchingPassword ? true : false;
    },
    changeConfirmPassword: ({ value: confirmPassword, state }) => {
      state.confirmPassword = confirmPassword;
      const isMatchingPassword = confirmPassword === state.password && state.password !== '';
      state.confirmPasswordMatch = isMatchingPassword ? true : false;
    }
  }
});

export const useStore = createHook(store);
