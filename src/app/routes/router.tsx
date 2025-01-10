import { paths } from "@/lib";
import { ErrorPage } from "@/pages/error";
import RootPage from "@/pages/root/ui/RootPage";
import TestPage from "@/pages/test/ui/TestPage";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../ui/DefaultLayout";
import { ProtectedRoute } from "../ui/ProtectedRoute";

const router: any = createBrowserRouter([
  {
    path: paths.root,
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.test,
        element: <TestPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: paths.root,
            element: <RootPage />,
          },
        ],
      },
      // {
      //   element: <RedirectIfAuthenticated element={<AccountsLayout />} />,
      //   children: [
      //     {
      //       path: paths.signIn,
      //       element: <SignIn />,
      //     },
      //     {
      //       path: paths.error,
      //       element: <CustomErrorPage />,
      //     },
      //     {
      //       path: paths.signUp,

      //       element: (
      //         <VerifyProvider>
      //           <SignUp />
      //         </VerifyProvider>
      //       ),
      //     },
      //   ],
      // },
    ],
  },
]);

export { router };
