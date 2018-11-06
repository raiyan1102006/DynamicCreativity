import React, {Component} from 'react';
import 'semantic-ui-css/semantic.css';

//Redux
import {createStore, applyMiddleware} from 'redux';
import {configureStore, sagaMiddleWare} from './store/ConfigureStore.jsx';
import {Provider} from 'react-redux';

// Sagas
import rootSaga from './middleware/Saga.jsx';

// Containers
import AppRouter from './containers/RouterContainer.jsx';

const store = configureStore();

sagaMiddleWare.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
