const privateRoutes = [
  {
    path: "/",
    loader: () => import("../pages/Markets/Market"),
    exact: true,
  },
  {
    path: "/Order",
    loader: () => import("../pages/Order/Order"),
    exact: true,
  },

  {
    path: "/search",
    loader: () => import("../pages/Search/Search"),
    exact: true,
  },
  {
    path: "/grap",
    loader: () => import("../pages/Grap/GrapPage"),
    exact: true,
  },

  {
    path: "/Online",
    loader: () => import("../pages/Online/Online"),
    exact: true,
  },

  {
    path: "/profile",
    loader: () => import("../pages/Auth/Profile"),
    exact: true,
  },
];

const screenRoutes = [

  {
    path: "/currency",
    loader: () => import("../pages/Currency/CurrecnyPage"),
  },


];
const publicRoutes = [
  {
    path: "/auth/signin",
    loader: () => import("../pages/Auth/Signin"),
  },
  {
    path: "/auth/signup",
    loader: () => import("../pages/Auth/Signup"),
  },
];
const simpleRoute = [{}];
export default {
  privateRoutes,
  publicRoutes,
  simpleRoute,
  screenRoutes,
};
