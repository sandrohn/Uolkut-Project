import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { EditProfile } from "../pages/EditProfile";
import { Recover } from "../pages/Recover";
import { NewPassword } from "../pages/NewPassword";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "recover",
        children: [
          {
            element: <AuthLayout />,
            children: [
              {
                index: true,
                element: <Recover />,
              },
              {
                path: "newpassword",
                element: <NewPassword />,
              },
            ],
          },
        ],
      },
      {
        path: "profile",
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "edit",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
