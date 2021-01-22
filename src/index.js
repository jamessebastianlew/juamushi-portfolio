import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Landing from './components/Landing/Landing';
import VanishGame from './components/VanishGame/VanishGame';

const App = () => {
    return (
        <div>
            <Landing />
            <VanishGame />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
