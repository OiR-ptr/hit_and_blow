import { createBrowserHistory } from "history";
import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter,
} from "connected-react-router";
import { Switch } from "@material-ui/core";
import { Route } from "react-router";

const createRootReducer = (objHistory) => {
  return combineReducers({
    router: connectRouter(objHistory),
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
          <Route path="/" exact></Route>
          <Route path="/game"></Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default entry;
