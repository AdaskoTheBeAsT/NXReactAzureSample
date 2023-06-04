import { InteractionType } from '@azure/msal-browser';
import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Login } from './Login';
import { Logout } from './Logout';
import { msalInstance } from './msal-config';
import { store } from './store';
import { Temperature } from './Temperature';

const authRequest = {
  scopes: [process.env.NX_APP_AZURE_SCOPE ?? ''],
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <div>
          <h1>Login</h1>
          <Link to="login">Login</Link>
        </div>
        <div>
          <h1>Logout</h1>
          <Link to="logout">Logout</Link>
        </div>
        <div>
          <h1>Temperature</h1>
          <Link to="temperature">Temperature</Link>
        </div>
      </>
    ),
  },
  {
    path: '/login',
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
        interactionType={InteractionType.Redirect}
        authenticationRequest={authRequest}
      >
        <Temperature />
      </MsalAuthenticationTemplate>
    ),
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </MsalProvider>
  );
}

export default App;
