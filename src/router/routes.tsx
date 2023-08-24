import { createBrowserRouter } from "react-router-dom";

import ReportContext from "../components/AppContext";

let browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ReportContext />,
  },
]);

export default browserRouter;
