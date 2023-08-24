import { RouterProvider } from "react-router-dom";

import browserRouter from "../../router/routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default App;
