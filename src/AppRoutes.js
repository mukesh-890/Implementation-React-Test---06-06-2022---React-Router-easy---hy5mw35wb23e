import React from 'react';
import {Route} from 'react-router';

export const AppRoutes = () => {
    return (
        <>
        <Route  path = "/"  component = {Index} />
        <Route path ="/home" component = {Home} />
        </>

    )
}
