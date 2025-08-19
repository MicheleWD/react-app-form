import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./styles/main.css";
import ContainerForm from "./composants/content/containerForm";
import {createBrowserRouter,Link,RouterProvider} from 'react-router-dom'
import AppBar from "./composants/navBar/appBar";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App/>
        <Link to="/declaration"> Faire une declaration</Link>
      </>
    ),
    
  },
  {
    path: "apropos",
    element: (
      <>
        <h1>A propos</h1>,
        <Link to ="/">Retour a l'accueil</Link>
      </>
    )
  },
  {
    path: "/declaration",
    element: (
      <>
        <AppBar/>
        <ContainerForm/>,
      </>
    )
    
  },
])

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
)
