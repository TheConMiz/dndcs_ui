import React, { Fragment, useEffect } from 'react'
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


    useEffect(() => {
        // define a custom handler function
        // for the contextmenu event
        const handleContextMenu = (event) => {
            // prevent the right-click menu from appearing
            event.preventDefault()
        }

        // attach the event listener to 
        // the document object
        document.addEventListener("contextmenu", handleContextMenu)

        // clean up the event listener when 
        // the component unmounts
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu)
        }
    }, [])

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