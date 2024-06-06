import { RouterProvider, createHashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import ResumePage from "./pages/ResumePage/index.jsx";
import OtherPage from "./pages/OtherPage/index.jsx";
import "./index.scss";

const router = createHashRouter([
  {
    path: "/",
    element: <ResumePage />,
  },
  {
    path: "other",
    element: <OtherPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
