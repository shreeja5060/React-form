
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Outlet, useRoutes } from "react-router-dom";
import Login from "./views/login";
import Form from "./views/form";
import Employ from "./views/components/employ";

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "form", element: <Form /> },
    { path: "employ", element: <Employ /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <Router>
      <Routing />
    </Router>
  );
};

export default App;

