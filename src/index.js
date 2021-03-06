import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { connect, Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
//import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore'
import firebase from 'firebase/app';
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { ReactReduxFirebaseProvider, getFirebase , isLoaded} from 'react-redux-firebase'

import fbConfig from './config/fbConfig'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, //include if using firestore
}

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase })),
    reduxFirestore(fbConfig)
  )
  //applyMiddleware([thunk.withExtraArgument(getFirebase, getFirestore)]) // to add other middleware
  // compose(
  //   applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  //   reduxFirestore(fbConfig),// redux binding for firebase
  //   reactReduxFirebase(fbConfig) // redux bindings for firestore
  // )
);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

//auth ready
const mapStateToProps = (state) => ({
  authIsLoaded: state.firebase.auth && state.firebase.auth.isLoaded,
});

const WaitTillAuth = connect(mapStateToProps)(({ authIsLoaded }) => {
  if (!authIsLoaded) return <div>splash screen...</div>;
  return (
    <App />
  )
});


  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <WaitTillAuth />
      </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
  );
  reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

