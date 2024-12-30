import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        },
        {
            path: 'order',
            element: <Order></Order>
        },

    ]
  },
]);

export default router;
