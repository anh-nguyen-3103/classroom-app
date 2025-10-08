import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../../constants/routes';
import { MainStackParamList } from '../types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';
import NotificationsScreen from '../../screens/notifications';
import ProfileScreen from '../../screens/profile';
import PublicScreen from '../../screens/public';
import SettingsScreen from '../../screens/settings';
import { MainTabsParamList } from '../types';

const Tab = createBottomTabNavigator<MainTabsParamList>();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: { backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E5E5EA' },
      }}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen
        name={ROUTES.PUBLIC}
        component={PublicScreen}
        options={{ tabBarLabel: 'Public' }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Notifications', tabBarBadge: 3 }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.MAIN_TABS} component={MainTabs} options={{ headerShown: false }} />

      <Stack.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <></>
      </Stack.Group>
    </Stack.Navigator>
  );
}
