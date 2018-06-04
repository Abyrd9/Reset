import React, {Component} from 'react';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import HomeEmpty from './components/HomeEmpty';
import Home from './components/Home';
import Edit from './components/Edit';

class App extends Component {
    render() {
        return (
            <div className='global-container'>
                <Edit />
            </div>
        )
    }
}

export default App;