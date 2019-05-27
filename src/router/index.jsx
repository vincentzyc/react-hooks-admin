import React from 'react';
// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Loadable from 'react-loadable';



import Containers from "../layout";

const Loading = () => (<div>Loading...</div>);
const Page404 = () => (<h2 style={{textAlign:'center'}}>...404...</h2>);

const MyLoadable = component => Loadable({
  loader: component,
  loading: Loading,
});

export default function RouterList() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={MyLoadable(() => import('../views/Login'))} />
        <Route path="/404" component={Page404} />
        <Route
          path="/"
          render={({ history, location }) => (
            <Containers history={history} location={location}>
              <Switch>
                <Route exact path="/" component={MyLoadable(() => import('../views/page1'))} />
                <Route path="/page2" component={MyLoadable(() => import('../views/page2'))} />
                <Route path="/page3" component={MyLoadable(() => import('../views/page3'))} />
                <Route path="/page4" component={MyLoadable(() => import('../views/page4'))} />
                <Route path="/page5" component={MyLoadable(() => import('../views/page5'))} />
                <Route path="/page6" component={MyLoadable(() => import('../views/page6'))} />
                <Route path="/page7" component={MyLoadable(() => import('../views/page7'))} />
                <Route path="/page8" component={MyLoadable(() => import('../views/page8'))} />
                <Route path="/page8" component={MyLoadable(() => import('../views/page8'))} />
                <Route path="/todos" component={MyLoadable(() => import('../views/todos'))} />
                <Route path="/updateinfo" component={MyLoadable(() => import('../views/update-info'))} />
                <Redirect replace to="/404" />
              </Switch>
            </Containers>
          )}
        />
      </Switch>
    </HashRouter>
  );
}
