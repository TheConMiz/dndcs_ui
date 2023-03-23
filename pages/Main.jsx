import React, { Fragment } from 'react'
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
// Self-generated UI components
// import UIController from "./middleware/UIController";
import DataController from "./middleware/DataController";
import UIThemeShell from './ui/UIThemeShell';

// const router = createBrowserRouter([
//     {
//       path: "./",
//       element: <div>Hello world!</div>,
//     },
//   ]);

//! App Structure - Data Sources -> Middleware <-> UI
const Main = () => {
    return (
        // <RouterProvider>
            <Fragment>
                {/* Middleware */}
                {/* <UIController /> */}
                <DataController />
                {/* UI */}
                <UIThemeShell />
            </Fragment>
        // </RouterProvider>

    )
}

export default Main