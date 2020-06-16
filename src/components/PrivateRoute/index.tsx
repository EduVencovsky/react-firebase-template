import React, { useContext, ReactNode } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom"

import { AuthContext } from '../../context/AuthContext'
import LoadingView from '../../components/Loading'

interface PrivateRouteProps extends RouteProps {
  children: ReactNode,
  redirectUrl?: string,
}

const PrivateRoute : React.FC<PrivateRouteProps> = ({ children, redirectUrl = '/login', ...otherProps }) => {
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
                  pathname: redirectUrl,
                  state: { from: location }
                }}
              />
            )
      )}
    />
  );
}

export default PrivateRoute