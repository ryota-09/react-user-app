import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home" render={({ match: url }) => (
        <Switch>
          {homeRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url.path}${route.path}`}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )} ></Route>
    </Switch>
  )
})
