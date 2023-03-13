import React, { Fragment } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
// Self-generated UI components
import UIController from "./middleware/UIController";
import DataController from "./middleware/DataController";
import UIThemeShell from './ui/UIThemeShell';
//! App Structure - Data Sources -> Middleware <-> UI
const Main = () => {
    return (
        <Fragment>
            {/* Middleware */}
            {/* <UIController /> */}
            <DataController />
            {/* UI */}
            <UIThemeShell />
        </Fragment>
    )
}

export default Main