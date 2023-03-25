import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees";
import Error from "./pages/Error";

import { Provider } from "react-redux";
import { store } from "./lib/redux/mySlice";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Topbar />
          <Routes>
          <Route exact path="/" element={<CreateEmployee />}></Route>
          <Route path="/currentemployees" element={<CurrentEmployees />}></Route>
          <Route path="*" element={<Error />}></Route>
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
