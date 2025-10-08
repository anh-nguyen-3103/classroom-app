import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../../constants/routes';
import ForgotPasswordScreen from '../../screens/forgot-password';
import LogInScreen from '../../screens/log-in';
import RegisterScreen from '../../screens/register';
import VerifyEmailScreen from '../../screens/verify-email';
import { AuthStackParamList } from '../types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name={ROUTES.LOGIN} component={LogInScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
      <Stack.Screen name={ROUTES.VERIFY_EMAIL} component={VerifyEmailScreen} />
    </Stack.Navigator>
  );
}
