import { Overmind } from 'overmind';
import { createHook } from 'overmind-react';
import firebase from 'firebase';

const store = new Overmind({
  state: {
    signUp: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nameConfirmed: false,
      emailConfirmed: false,
      passwordConfirmed: false,
      confirmPasswordMatch: false,
    },
    signIn: {
      email: '',
      password: '',
    },
    errorHandling: {
      errorActive: false,
      errorMessage: '',
    },
    isSignUpPage: false,
    isAuthenticationLoading: false,
    isAuthenticated: false,
    userId: '',
  },
  effects: {
    firebaseAuth: {
      handleSignIn: (email, password) => {
        return new Promise((resolve, reject) => {
          try {
            const res = firebase.auth().signInWithEmailAndPassword(email, password);
            resolve(res);
          } catch (err) {
            reject(err);
          }
        });
      },
      handleSignUp: (name, email, password) => {
        return new Promise((resolve, reject) => {
          try {
            const res = firebase.auth().createUserWithEmailAndPassword(email, password);
            resolve(res);
          } catch (err) {
            reject(err);
          }
        });
      },
      handleSignOut: async () => {},
    },
  },
  actions: {
    changeSignUpName: ({ value: name, state }) => {
      state.signUp.name = name;
      state.signUp.nameConfirmed = name.length > 1 ? true : false;
    },
    changeSignUpEmail: ({ value: email, state }) => {
      state.signUp.email = email;
      const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const isValidated = emailRegex.test(email);
      state.signUp.emailConfirmed = isValidated ? true : false;
    },
    changeSignUpPassword: ({ value: password, state }) => {
      state.signUp.password = password;
      const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
      const isValidated = passwordRegex.test(password);
      state.signUp.passwordConfirmed = isValidated ? true : false;
      const isMatchingPassword = state.signUp.confirmPassword === password && password !== '';
      state.signUp.confirmPasswordMatch = isMatchingPassword ? true : false;
    },
    changeSignUpConfirmPassword: ({ value: confirmPassword, state }) => {
      state.signUp.confirmPassword = confirmPassword;
      const isMatchingPassword =
        confirmPassword === state.signUp.password && state.signUp.password !== '';
      state.signUp.confirmPasswordMatch = isMatchingPassword ? true : false;
    },
    changeSignInEmail: ({ value: email, state }) => {
      state.signIn.email = email;
    },
    changeSignInPassword: ({ value: password, state }) => {
      state.signIn.password = password;
    },
    toggleIsSignUpPage: ({ value, state }) => {
      state.isSignUpPage = value;
    },
    handleSignIn: async ({ state, effects }) => {
      const { email, password } = state.signIn;
      try {
        state.isAuthenticationLoading = true;
        const userObject = await effects.firebaseAuth.handleSignIn(email, password);
        state.isAuthenticationLoading = false;
        state.isAuthenticated = true;
        state.userId = userObject.user.uid;
        state.signIn = {
          email: '',
          password: '',
        };
        state.signUp = {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          nameConfirmed: false,
          emailConfirmed: false,
          passwordConfirmed: false,
          confirmPasswordMatch: false,
        };
      } catch (err) {
        if (state.errorHandling.errorMessage === '') {
          state.errorHandling.errorMessage = err.message;
        }
      }
    },
    handleSignUp: async ({ state, effects }) => {
      const {
        name,
        email,
        password,
        nameConfirmed,
        emailConfirmed,
        passwordConfirmed,
        confirmPasswordMatch,
      } = state.signUp;

      if (!nameConfirmed || !emailConfirmed || !passwordConfirmed || !confirmPasswordMatch) {
        if (state.errorHandling.errorMessage === '') {
          state.errorHandling.errorMessage =
            "One or more input fields aren't filled out correctly.";
        }
      } else {
        try {
          state.isAuthenticationLoading = true;
          const userObject = await effects.firebaseAuth.handleSignUp(name, email, password);
          state.isAuthenticationLoading = false;
          state.isAuthenticated = true;
          state.userId = userObject.user.uid;
          state.signIn = {
            email: '',
            password: '',
          };
          state.signUp = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            nameConfirmed: false,
            emailConfirmed: false,
            passwordConfirmed: false,
            confirmPasswordMatch: false,
          };
        } catch (err) {
          if (state.errorHandling.errorMessage === '') {
            state.errorHandling.errorMessage = err.message;
          }
        }
      }
    },
    setErrorMessage: ({ value: text, state }) => {
      if (state.errorHandling.errorMessage === '') {
        state.errorHandling.errorMessage = text;
      }
    },
    clearErrorMessage: ({ state }) => {
      state.errorHandling.errorMessage = '';
    },
  },
});

export const useStore = createHook(store);
