import React from 'react'
import { Route, Redirect } from 'react-router'
import { useAuth } from './router-helper'

export default function ProtectedRoute({component : Component, ...rest}) {
    const auth = useAuth();
    return (
       <Route {...rest} render={props => {
           if(auth.user === true){
               return <Component {...props} />
           }
           else{
              return <Redirect to={
                   
                   {
                       pathname : '/signin',
                       state : {
                           from : props.location
                       }
                   }
               } />
            }
            }

       } />
    )
}
