import i18n from 'i18next';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation';
import { LocalizeService } from './services';

export const App = () => {
  useEffect(() => {
    const init = async () => await LocalizeService.init();

    init();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider>
          <RootNavigator />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </I18nextProvider>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });
