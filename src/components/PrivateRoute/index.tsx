import React, { useContext, ReactNode } from 'react'
import { Route, Redirect } from "react-router-dom"

import { AuthContext } from '../../context/AuthContext'
import LoadingView from '../../components/Loading'

interface PrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute({ children, ...otherProps }: PrivateRouteProps) {

  const { isAuthenticated, isLoading } = useContext(AuthContext)

  return (
    <Route
      {...otherProps}
      render={({ location }) => (
        isLoading ? (
          <LoadingView />
        ) :
          isAuthenticated ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
      )}
    />
  );
}