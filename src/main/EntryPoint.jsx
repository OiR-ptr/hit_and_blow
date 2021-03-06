import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter,
} from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import GameScreenTop from "../components/GameScreenTop";
import gameReducer from "../reducers/GameReducer";

const createRootReducer = (objHistory) => {
  return combineReducers({
    router: connectRouter(objHistory),
    game: gameReducer,
  });
};

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history)))
  );
  return store;
};
const store = configureStore();

const entry = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact>
            <GameScreenTop />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default entry;
