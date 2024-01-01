import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import SignIn from "./components/SignIn";

const layoutRoutes = [
  {
    path: "/about",
    element: <h1>about</h1>,
  },
  {
    path: "/home",
    element: <h1>home</h1>,
  },
  {
    path: "/dashboard",
    element: (
      <h1>
        dashboad Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Molestiae enim rerum ratione deserunt voluptates neque molestias, quam
        maxime nam, autem necessitatibus cupiditate consectetur? Alias provident
        adipisci explicabo aperiam ratione perferendis.{" "}
      </h1>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
];
// const nonLayoutRoutes = [
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
// ];

const NavBar = () => {
  return (
    <>
      {/* <button onClick={() => {}}>sign-in</button> */}
      <ul>
        <li>
          <Link to="/home">
            Home <br />
          </Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Sign-in">Sign-in</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        {/* {nonLayoutRoutes.map((ele) => (
          <Route key={ele.path} path={ele.path} element={ele.element} />
        ))} */}

        <Route path="*" element={<h1>404</h1>} />

        <Route element={<NavBar />}>
          {layoutRoutes.map((ele) => (
            <Route key={ele.path} path={ele.path} element={ele.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
