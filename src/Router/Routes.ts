import { Products, Home, Login, User } from "../Pages";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/login", component: Login },
];

export const privateRoutes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/user", component: User },
];
