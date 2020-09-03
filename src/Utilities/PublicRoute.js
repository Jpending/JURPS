import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../Services/Token-service'

export default function PublicRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/'} />
          : <Component {...componentProps} />
      )}
    />
  )
}