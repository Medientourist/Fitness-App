import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Homepage from "./pages/Homepage";
import Workouts from "./pages/Workouts";
import Profil from "./pages/Profil";
import Program from "./pages/Program";
import Training from "./pages/Training";
import TrainingActive from "./pages/TrainingActive";

const httpLink = createHttpLink({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv6e28py000008l35aun5ekg/master",
});

const authLink = setContext((_, { headers }) => {
  const token =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTgzMzc5MzIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2x2NmUyOHB5MDAwMDA4bDM1YXVuNWVrZy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vIiwic3ViIjoiOGY0NjVkNWEtZjEzNC00MWJiLWFiN2YtZDBhZThmNDQ0MTFhIiwianRpIjoiY2x4ZTYxZWRtMDd0djA2dXdhczVpOWIxaCJ9.2Z2tVaS2TVk5wALIS7wXJct3asuX9qwlefWsCIEU8psOMglBdDfvfZ0nppVVV0flqfxjXodCFStLSxmyouPYdoylJCneg8zB7w7oGXnVzJXoPYXUt2xxtu1KoHunV_uv6Cc01s3Vl1dbTtCiOUErViwbnKJHfgjFgiOjPvLUU_INWxXWYTkYO2kPxw-m6EMs-jpFcS_VX-XVLlGkVGvPAcqczeds7jQjdQeocEGqgH7HOPf5gAgmuss94nI-EMPVllOQIRGHgMT1zjjLRgFh9_HM4hjSrKdtzkOtMhOAK3IVFOGdy9WpgNJTp_KExPkDTWMCAa5AFOyr8zlrCk5jtWfiu_uJpab5dwwE7vynoGZBWQ8r5-EEi0D4JivMU8reoOPFUT-sRGQDH6z0AQ8C633rmFSVSvtNDHngJNn4ik_84Nxjvx-hoaneVbDNEbYnEuvVCg8ndslCM9wkf9mvkI0Yil7MvdNa6xLFBSMgpF6dC1t8Efsie2MEHgrMg3KAUsOqMESyNcuvAUUxcVoujADaMgVKuo0P_ecf_8GglP8u1PkmE3QO3yMoLTYc72AKZO_m8_KKbLgSnIpawrWu1tS7CpTDJ-PtUJqDZ8RngwZmiqywt9KYwPE8Usl0nLBx6bDoHjL0FOFZj_i5gLng8wEhlT_w8FIAZFkcHbccs-M";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
    element: <Workouts />,
  },
  {
    path: "/profil",
    element: <Profil />,
  },
  {
    path: "/program/:id",
    element: <Program />,
  },
  {
    path: "/training/:id",
    element: <Training />,
  },
  {
    path: "/trainingActive/:id",
    element: <TrainingActive />,
  },
]);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
