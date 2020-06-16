import React, { useMemo } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const firebaseProviders: {[index: string]: string} = {
  google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  facebook: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  github: firebase.auth.GithubAuthProvider.PROVIDER_ID,
}

const getUiConfig = ({ redirectUrl = '/', loginProviders }: { redirectUrl: string, loginProviders: string[] }) => ({
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: redirectUrl,
  signInOptions: loginProviders,
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
})

interface FirebaseLoginProps {
  google?: boolean, 
  facebook?: boolean, 
  github?: boolean, 
  twitter?: boolean, 
  redirectUrl?: string
}

const FirebaseLogin: React.FC<FirebaseLoginProps> = ({ google, facebook, github, twitter, redirectUrl = '/' }) => {
  const uiConfig = useMemo(() => {
    const providers = Object.entries({ google, facebook, github, twitter }).filter(([key, val]) => val)
    const signInOptions = providers.map(x => firebaseProviders[x[0]])
    return getUiConfig({ redirectUrl, loginProviders: signInOptions })
  }, [google, facebook, github, twitter, redirectUrl])

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

export default FirebaseLogin 