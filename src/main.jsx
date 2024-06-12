import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Homepage from "./pages/Homepage";
import Workout from "./pages/Workout";
import Profil from "./pages/Profil";
import Programs from "./pages/Programs";
import Training from "./pages/Training";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv6e28py000008l35aun5ekg/master",
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/workout",
    element: <Workout />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/training",
    element: <Training />,
  },
]);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
