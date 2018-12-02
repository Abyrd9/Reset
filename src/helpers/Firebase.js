import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyA9KSsz0RbydXQTYqOiFnjoZF__y6a-kiw',
  authDomain: 'reset-d22c5.firebaseapp.com',
  databaseURL: 'https://reset-d22c5.firebaseio.com',
  projectId: 'reset-d22c5',
  storageBucket: 'reset-d22c5.appspot.com',
  messagingSenderId: '354604656333'
};

export const InitializeFirebase = () => {
  firebase.initializeApp(config);
};
