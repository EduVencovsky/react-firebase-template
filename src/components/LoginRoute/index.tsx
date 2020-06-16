import React, { useEffect, useContext } from 'react'
import { Route, useHistory, RouteProps } from "react-router-dom"

import { AuthContext } from '../../context/AuthContext'

interface LoginRouteProps extends RouteProps {
  redirectAuthUrl?: string
}

const LoginRoute: React.FC<LoginRouteProps> = ({ redirectAuthUrl = "/", ...otherProps}) => {

  const { isAuthenticated } = useContext(AuthContext)
  const history = useHistory()

  useEffect(() => {
    if (isAuthenticated)
      history.push(redirectAuthUrl)
  }, [history, isAuthenticated,redirectAuthUrl])

  return (
    <Route
      {...otherProps}
    />
  );
}

export default LoginRoute