import React from 'react';
import {Provider} from 'react-redux';
import Index from './Index';

/* Redux */
import {createStore} from 'redux'
import reducers from './src/Store/Reducers/index';

const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <Index/>
        </Provider>
    )
};

export default App;