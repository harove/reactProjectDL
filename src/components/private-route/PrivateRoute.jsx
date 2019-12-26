import React from 'react';
import { useSelector } from 'react-redux'; 
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest}) => {
    const isLogin = useSelector(store => store.auth.isLogin);
    return (
        <Route
            {...rest}
            render={props => 
                isLogin ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};