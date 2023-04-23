import { NavLink } from "react-router-dom";

// import ErrorPage from "./views/ErrorPage";
// import Home from "./views/Home";
import Test from "./views/Test";

import "./App.css";

function App() {
  return (
    <>
      <div id='sidebar'>
        <NavLink to={`/home`} style={{ marginRight: "20px" }}>
          Home
        </NavLink>

        <NavLink to={`/test`}>Amis</NavLink>
      </div>
    </>
    // <div className='App'>
    //   {/* <RouterProvider router={router} /> */}
    //   Use Amis to build a low-code application ...
    //   <Test />
    // </div>
  );
}

export default App;
