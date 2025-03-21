import { createBrowserRouter } from "react-router";
import App from "./App"
import SignInPage from './pages/SignInPage/SignInPage';
import CowIcon from './components/CowIcon/CowIcon';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "cowicon",
        Component: CowIcon,
      },{
        path: "test",
        Component: SignInPage,
        loader: ({ request }) =>
          fetch(`https://dummyjson.com/quotes`, {
            signal: request.signal,
          }),
      }
    ],
  },{
    path: "/signin",
    Component: SignInPage,
  },
]);
