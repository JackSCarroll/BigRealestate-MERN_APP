import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"
import Layout from "./routes/layout/layout"

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