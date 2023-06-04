import { Configuration, PublicClientApplication } from '@azure/msal-browser';

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NX_APP_AZURE_CLIENT_ID ?? '',
    authority: `https://login.microsoftonline.com/${process.env.NX_APP_AZURE_TENANT_ID}`,
    redirectUri: 'http://localhost:4200/',
  },
  system: {
    loggerOptions: {
      piiLoggingEnabled: false,
    },
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
