import React from 'react';
import {Route} from 'react-router';

export const AppRoutes = () => {
    return (
        <>
        <Route  path = "/">
        <Index />
        </Route>
        
        <Route path ="/home">
        <Home />
        </Route>
        
        <Route path ="/">
        <NotFound />
        </Route>
        
        </>

    )
}
