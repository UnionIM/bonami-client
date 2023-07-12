import { Products, Home, Login } from "../Pages";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/login", component: Login },
];

export const privateRoutes = [{}];
