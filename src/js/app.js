import React, {Component} from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

class App extends Component {
    render() {
        return (
            <div className='global-container'>
                <SignIn />
            </div>
        )
    }
}

export default App;