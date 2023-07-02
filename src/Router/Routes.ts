import Products from "../Pages/Products";
import Home from "../Pages/Home";

export const publicRoutes = [
  {path: '/', component: Home},
  {path: '/products', component: Products}
]

export const privateRoutes = [
  {}
]

