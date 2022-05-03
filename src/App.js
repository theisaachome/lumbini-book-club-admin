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

function App() {
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
