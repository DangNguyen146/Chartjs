import HomeTemplate from "../container/HomeTemplate";
import Login from "../container/HomeTemplate/AccUser/Login";
import Charts from "../container/HomeTemplate/Charts";
import Dashboard from "../container/HomeTemplate/Dashboard";
import PageNotFound from "../container/PageNotFound";

const routeHome = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/charts",
    component: Charts,
    exact: false,
  },
];
export { routeHome };
