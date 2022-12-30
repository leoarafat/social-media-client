import { createBrowserRouter } from "react-router-dom";
import Login from "../../authentication/Login/Login";
import SignUp from "../../authentication/SignUp/SignUp";
import Home from "../../home/Home/Home";
import Main from "../../layout/Main/Main";
import PostDetails from "../../PostCard/PostDetails";
import AboutMe from "../../shared/AboutME/AboutMe";
import AboutModal from "../../shared/AboutME/AboutModal";
import AboutUpdate from "../../shared/AboutME/AboutUpdate";
import Media from "../../shared/Media/Media";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
        element: <AboutUpdate />,
        // element: <AboutModal/>
      },
      {
        path: "/postDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allPost/${params.id}`),
        element: <PostDetails />,
      },
    ],
  },
]);
