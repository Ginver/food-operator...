import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({children, user}) {

    return (
        <Route>
            {user !== null ? children : <Redirect to="/overview" />}
        </Route>
    )
};

export default PrivateRoute;