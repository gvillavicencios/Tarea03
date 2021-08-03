import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; 
import StartScreen from './src/components/screens/StartScreen';
import * as reducers from './src/store/reducers/';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
); // 3

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StartScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;