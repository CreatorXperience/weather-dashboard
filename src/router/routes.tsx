import { createBrowserRouter } from "react-router-dom";

import ReportContext from "../components/AppContext";

let browserRouter = createBrowserRouter([
  {
    element: <ReportContext />,
    path: "/",
  },
]);

export default browserRouter;
