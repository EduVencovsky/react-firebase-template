import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { UserProvider } from './context/UserContext';
import AuthProvider from './context/AuthContext';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({})

// Uncomment AuthProvider only after you create a firebase config
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <UserProvider>
          {/* <AuthProvider> */}
            <div>
              hey
            </div>
          {/* </AuthProvider> */}
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
