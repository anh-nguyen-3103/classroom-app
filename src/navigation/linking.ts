import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      AuthStack: {
        screens: {
          Login: 'login',
          Register: 'register',
          ForgotPassword: 'forgot-password',
          VerifyEmail: 'verify-email/:email',
        },
      },
      MainStack: {
        screens: {
          MainTabs: {
            screens: {
              Home: 'home',
              Search: 'search',
              Notifications: 'notifications',
              Profile: 'profile/:userId?',
            },
          },
          Details: 'details/:id',
          Settings: 'settings',
          EditProfile: 'edit-profile/:userId',
        },
      },
    },
  },
};
