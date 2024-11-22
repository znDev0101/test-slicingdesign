import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Dashboard from "./components/Dashboard";
import EditAlamat from "./components/edit/EditAlamat";
import UploadDokumen from "./components/uploadDokumen/UploadDokumen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/edit/alamat",
          element: <EditAlamat />,
        },
        {
          path: "/edit/uploaddokumen",
          element: <UploadDokumen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
