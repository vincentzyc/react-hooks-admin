import React, { Suspense, lazy } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Containers from "../layout";

const Page1 = lazy(() => import('../views/page1'));
const Page2 = lazy(() => import('../views/page2'));
const Page3 = lazy(() => import('../views/page3'));
const Login = lazy(() => import('../views/Login'));

export default function RouterList() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={({ history, location }) => (
              <Containers history={history} location={location}>
                <Switch>
                  <Route exact path="/" component={Page1} />
                  <Route path="/Page2" component={Page2} />
                  <Route path="/Page3" component={Page3} />
                  {/* <Redirect replace to="/" /> */}
                </Switch>
              </Containers>
            )}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
