import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/Error/ErrorPage";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Books from "./Pages/Books/Books";
import BookDetails from "./Pages/Books/BookDetails";
import About from "./Pages/About/About";
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/loader",
        element: <Loader />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);
