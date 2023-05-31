import { InteractionType } from '@azure/msal-browser';
import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Login } from './Login';
import { Logout } from './Logout';
import { msalInstance } from './msal-config';
import { store } from './store';
import { Temperature, fetchTemperature } from './Temperature';

const authRequest = {
  scopes: ['api://6d524fad-04a9-4ab4-a6ba-26d062facca6/access_as_user'],
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '/temperature',
    element: (
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Popup}
        authenticationRequest={authRequest}
      >
        <Temperature />
      </MsalAuthenticationTemplate>
    ),
    loader: fetchTemperature,
  },
]);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MsalProvider>
  );
}

export default App;
