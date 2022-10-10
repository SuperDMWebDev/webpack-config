import React from "react";
import {
  NavLink,
  Outlet
} from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>React Template</h1>
      <h3>Header</h3>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/error">Not Found Route</NavLink>
      </div>
      <Outlet />
      <h3>Footer</h3>
    </div>
  )
}

export default Home;