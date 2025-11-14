
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Service from "./component/Service";
import MainLayout from "../routes/MainLayout";
import ErrorPage from "./component/ErrorPage";

 const App = () => {

  const router = createBrowserRouter([
  {
      path:"/",
      element:<MainLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          index:true,
          element:<Home />,
        },
        { path:"about",
          element:<About />,
        },
        {
          path:"product",
          element:<Product />,
        },
        {
          path:"service",
          element:<Service />,
        },
      ],
  },
])

  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}

export default App;