import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./routes/homePage/homePage"
import ListPage from "./routes/listPage/listPage"
import { Layout, RequireAuth } from "./routes/layout/layout"
import SinglePage from "./routes/singlePage/singlePage"
import ProfilePage from "./routes/profilePage/profilePage"
import LoginPage from "./routes/loginPage/loginPage"
import Register from "./routes/register/register"
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage"
import NewPostPage from "./routes/newPostPage/newPostPage"

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
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <RequireAuth />,
        children: [
          {
            path: "/profile",
            element: <ProfilePage/>,
          },
          {
            path: "/profile/update",
            element: <ProfileUpdatePage/>,
          },
          {
            path: "/add",
            element: <NewPostPage/>,
          },
        ],
      }
    ],
  },
])

function App() {
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App