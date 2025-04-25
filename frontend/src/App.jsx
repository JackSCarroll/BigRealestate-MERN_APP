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
import AdminPage from "./routes/adminPage/adminPage"
import { singlePageLoader, listPageLoader, profilePageLoader } from "./lib/loaders.js"
import UserList from "./components/userList/userList.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
        loader: listPageLoader,
      },
      {
        path: "/:id",
        element: <SinglePage />,
        loader: singlePageLoader,
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
            loader: profilePageLoader,
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
      },
      {
        path: "/admin",
        element: <AdminPage/>,
      },
    ],
  },
])

function App() {
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App