import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({children, user}) {
    // omdat we nog steeds alle mogelijke properties zoals exact etc. op Route willen zetten, kunnen we met de ...rest operator zeggen:
    // al die andere props die je verder nog ontvangt, zet die ook allemaal maar op <Route>
    return (
        <Route>
            {user !== null ? children : <Redirect to="/overview" />}
        </Route>
    )
};

export default PrivateRoute;