import React, { Fragment } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
// Self-generated UI components
import UIController from "./middleware/UIController";
import DataController from "./middleware/DataController";
import UIShell from './ui/UIShell';
//! App Structure - Data Sources -> Middleware <-> UI
const Main = () => {
    return (
        <Fragment>
            {/* Middleware */}
            <UIController />
            <DataController />
            {/* UI */}
            <UIShell />
        </Fragment>
    )
}

export default Main