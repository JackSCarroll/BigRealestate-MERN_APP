import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"
import Layout from "./routes/layout/layout"
import SinglePage from "./routes/singlePage/singlePage"
import LoginPage from "./routes/loginPage/loginPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      }
    ]
  },
])

function App() {
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App