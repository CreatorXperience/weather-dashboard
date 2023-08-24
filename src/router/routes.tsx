import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";

let browserRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
]);

export default browserRouter;
