import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Oppgave1 } from "./oppgaver/Oppgave1.tsx";
import { Eksempel1 } from "./presentasjonseksempler/Eksempel1.tsx";
import { Eksempel2 } from "./presentasjonseksempler/Eksempel2.tsx";
import { Eksempel3 } from "./presentasjonseksempler/Eksempel3.tsx";
import { Eksempel4 } from "./presentasjonseksempler/Eksempel4.tsx";
import { Eksempel6 } from "./presentasjonseksempler/Eksempel6.tsx";
import { Eksempel7 } from "./presentasjonseksempler/Eksempel7.tsx";
import { LF1 } from "./losningsforslag/LF1.tsx";
import { Oppgave2 } from "./oppgaver/Oppgave2.tsx";
import { Oppgave3 } from "./oppgaver/Oppgave3.tsx";
import { LF3 } from "./losningsforslag/LF3.tsx";
import { Oppgave4 } from "./oppgaver/Oppgave4.tsx";
import { LF4 } from "./losningsforslag/LF4.tsx";
import { LF5 } from "./losningsforslag/LF5.tsx";
import { Oppgave5 } from "./oppgaver/Oppgave5.tsx";
import { Oppgave7 } from "./oppgaver/Oppgave7.tsx";
import { LF7 } from "./losningsforslag/LF7.tsx";
import { LF8 } from "./losningsforslag/LF8.tsx";
import { Oppgave8 } from "./oppgaver/Oppgave8.tsx";
import { Oppgave9 } from "./oppgaver/Oppgave9.tsx";
import { LF9 } from "./losningsforslag/LF9.tsx";
import { LF2 } from "./losningsforslag/LF2.tsx";
import { LF6 } from "./losningsforslag/LF6.tsx";
import { Oppgave6 } from "./oppgaver/Oppgave6.tsx";
import { Oppgave10 } from "./oppgaver/Oppgave10.tsx";
import { LF10 } from "./losningsforslag/LF10.tsx";
import { Oppgave11 } from "./oppgaver/Oppgave11.tsx";
import { LF11 } from "./losningsforslag/LF11.tsx";
import { Eksempel5 } from "./presentasjonseksempler/Eksempel5.tsx";
import { Eksempel8 } from "./presentasjonseksempler/Eksempel8.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/oppgaver",
    children: [
      {
        index: true,
        element: null,
      },
      { path: "1", element: <Oppgave1 /> },
      { path: "2", element: <Oppgave2 /> },
      { path: "3", element: <Oppgave3 /> },
      { path: "4", element: <Oppgave4 /> },
      { path: "5", element: <Oppgave5 /> },
      { path: "6", element: <Oppgave6 /> },
      { path: "7", element: <Oppgave7 /> },
      { path: "8", element: <Oppgave8 /> },
      { path: "9", element: <Oppgave9 /> },
      { path: "10", element: <Oppgave10 /> },
      { path: "11", element: <Oppgave11 /> },
    ],
  },
  {
    path: "/eksempel",
    children: [
      {
        index: true,
        element: null,
      },
      { path: "1", element: <Eksempel1 /> },
      { path: "2", element: <Eksempel2 /> },
      { path: "3", element: <Eksempel3 /> },
      { path: "4", element: <Eksempel4 /> },
      { path: "5", element: <Eksempel5 /> },
      { path: "6", element: <Eksempel6 /> },
      { path: "7", element: <Eksempel7 /> },
      { path: "8", element: <Eksempel8 /> },
    ],
  },
  {
    path: "/losningsforslag",
    children: [
      {
        index: true,
        element: null,
      },
      { path: "1", element: <LF1 /> },
      { path: "2", element: <LF2 /> },
      { path: "3", element: <LF3 /> },
      { path: "4", element: <LF4 /> },
      { path: "5", element: <LF5 /> },
      { path: "6", element: <LF6 /> },
      { path: "7", element: <LF7 /> },
      { path: "8", element: <LF8 /> },
      { path: "9", element: <LF9 /> },
      { path: "10", element: <LF10 /> },
      { path: "11", element: <LF11 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
