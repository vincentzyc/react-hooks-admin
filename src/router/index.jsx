import React from 'react';
// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';



import Containers from "../layout";

const Loading = () => (<div>Loading...</div>);

const MyLoadable = component => Loadable({
  loader: component,
  loading: Loading,
});

export default function RouterList() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={MyLoadable(() => import('../views/Login'))} />
        <Route
          path="/"
          render={({ history, location }) => (
            <Containers history={history} location={location}>
              <Switch>
                <Route exact path="/" component={MyLoadable(() => import('../views/page1'))} />
                <Route path="/Page2" component={MyLoadable(() => import('../views/page2'))} />
                <Route path="/Page3" component={MyLoadable(() => import('../views/page3'))} />
                <Route path="/Page4" component={MyLoadable(() => import('../views/page4'))} />
                <Route path="/Page5" component={MyLoadable(() => import('../views/page5'))} />
                <Route path="/Page6" component={MyLoadable(() => import('../views/page6'))} />
                <Route path="/Page7" component={MyLoadable(() => import('../views/page7'))} />
                <Route path="/Page8" component={MyLoadable(() => import('../views/page8'))} />
                {/* <Redirect replace to="/" /> */}
              </Switch>
            </Containers>
          )}
        />
      </Switch>
    </HashRouter>
  );
}
