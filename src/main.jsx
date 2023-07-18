import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DrinkContextComponent from './contexts/DrinkContextComponent.jsx'
import GoogleContextProvider from './contexts/GoogleContextProvider.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'
import './index.css'
import PostContextProvider from './contexts/AdminPostContextProvider.jsx'
import AvatarContextComponent from './contexts/AvatarContextComponents.jsx'
import HatContextComponet from './contexts/HatContextComponet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AuthContextProvider>
      <DrinkContextComponent>
        <GoogleContextProvider>
          <PostContextProvider>
            <AvatarContextComponent>
              <HatContextComponet>
                <App />
              </HatContextComponet>
            </AvatarContextComponent>
          </PostContextProvider>
        </GoogleContextProvider>
      </DrinkContextComponent>
    </AuthContextProvider>
  // </React.StrictMode>
)
