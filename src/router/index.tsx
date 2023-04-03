import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { PATH } from "./rutes";
import { Loading } from "../components/Loading";
import { MainLayout } from "../pages/layouts/MainLayout";

const PodCast = lazy(() => import("../pages/PodCast/PodCast"));
const PodCastDetail = lazy(
  () => import("../pages/PodCastDetail/PodCastDetail")
);

export const Routes = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={PATH.PODCAST} component={PodCast} />
            <Route
              exact
              path={PATH.PODCAST}
              component={PodCastDetail}
            />
          </Switch>
        </Suspense>
      </MainLayout>
    </Router>
  );
};
