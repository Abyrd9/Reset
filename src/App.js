import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { InitializeFirebase } from './helpers/Firebase';
import { addIcons } from './helpers/FontAwesome';
import { GlobalStyle } from './helpers/GlobalStyle';
import Theme from './helpers/Theme';

// Components
import ErrorPopup from './components/visual/CommonComponents/ErrorPopup/ErrorPopup';
import Routes from './components/routing/Routes';

// Run Helper Functions
InitializeFirebase();
addIcons();

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <Routes />
          <ErrorPopup />
          <GlobalStyle />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
