import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../../Hooks/UseAuth';

const PrivetRoute = ({children, ...rest}) => {
    const {user, isLoading} = UseAuth();
    if(isLoading){
        return <Spinner animation="border" />
    }
    return (
        <div>
            <Route
            {...rest}
            render={({location}) =>user.displayName? children:<Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
            ></Redirect>
            }
            ></Route>
        </div>
    );
};

export default PrivetRoute;