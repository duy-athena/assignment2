import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksRoute from "../../routes/BooksRoute/BooksRoute";
import BookDetailsRoute from "../../routes/BookDetailsRoute/BookDetailsRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksRoute />,
  },
  {
    path: "/books/:id",
    element: <BookDetailsRoute />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
