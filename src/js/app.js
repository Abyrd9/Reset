import React, {Component} from 'react';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomeEmpty from './components/HomeEmpty';

class App extends Component {
    render() {
        return (
            <div className='global-container'>
                <HomeEmpty />
            </div>
        )
    }
}

export default App;