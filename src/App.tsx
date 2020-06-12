import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { UserProvider } from './context/UserContext';
import AuthProvider from './context/AuthContext';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({})

// Don't forget to add the firebase config in index.tsx
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <UserProvider>
          <AuthProvider>
            <div>
              hey
            </div>
          </AuthProvider>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
