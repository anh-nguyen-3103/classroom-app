import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../constants/routes';
import { linking } from './linking';
import { AuthStack, MainStack, OnboardingStack } from './stacks';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const isAuthenticated = false;
  const hasCompletedOnboarding = false;

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name={ROUTES.AUTH_STACK} component={AuthStack} />
        ) : !hasCompletedOnboarding ? (
          <Stack.Screen name={ROUTES.ONBOARDING_STACK} component={OnboardingStack} />
        ) : (
          <Stack.Screen name={ROUTES.MAIN_STACK} component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
