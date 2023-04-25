import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import ForgotPassword from "./routes/ForgotPassword";
import MessagesPage from "./routes/MessagesPage";
import FriendsPage from "./routes/FriendsPage";
import SettingsPage from "./routes/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "messages",
        element: <MessagesPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: ":conversationId",
            element: <MessagesPage />,
          },
        ],
      },
      {
        path: "friends",
        element: <FriendsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div style={{ fontFamily: "roboto" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
