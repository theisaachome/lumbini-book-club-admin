import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import { userInputs } from "./formSource";
import New from "./pages/new/New";
import "./style/dark.scss";
import BooksPage from "./pages/BooksPage";


// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { LOGOUT } from "./actions/types";
import Authors from "./pages/author/Authors";
import AuthorForm from "./pages/author/AuthorForm";
import Author from "./pages/author/Author";

function App() {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
     <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<Login/>} />
            <Route path="users">
              <Route index element={<List/>} />
              <Route path=":userId" element={<Single/>}/>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="books" element={<BooksPage/>}/>
            {/* <Route path="authors" element={<AuthorsPage/>}/> */}
            <Route path="authors">
              <Route index element={<Authors/>} />
              <Route path=":authorId" element={<Author/>}/>
              <Route
                path="new"
                element={<AuthorForm/>}
              />
            </Route>
            <Route path="products">
              <Route index element={<List/>} />
              <Route path=":productId" element={<Single/>}/>
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
          </Route>
        </Routes>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
