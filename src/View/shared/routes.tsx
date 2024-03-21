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
  {
    path: "/invitation",
    loader: () => import("../pages/Invitation/Invitation"),
    exact: true,
  },
  {
    path: "/company",
    loader: () => import("../pages/Company/Company"),
    exact: true,
  },
  {
    path: "/faqs",
    loader: () => import("../pages/Faqs/Faqs"),
    exact: true,
  },
  {
    path: "/tc",
    loader: () => import("../pages/T&C/Tc"),
    exact: true,
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
