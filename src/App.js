import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import thunk from "redux-thunk";
import Layout from "./containers/Layout/Layout";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Layout>
            <Switch>
              <Route
                exact
                path={"/"}
                render={() => {
                  return <Redirect to={"/products"} />;
                }}
              />
              <Route exact path={"/products"} component={Home} />
              <Route exact path={"/products/:id"} component={ProductDetail} />
              <Route exact patr={"/cart"} component={ShoppingCart} />
            </Switch>
          </Layout>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
