import { RouterProvider } from "react-router-dom";
import "./i18n";
import { routes } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      {/* <Toaster /> */}
    </>
  );
}

export default App;
