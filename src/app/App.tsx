import React, {useState, useEffect, Suspense} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {getStore} from 'state';
import SplashScreen from 'react-native-splash-screen';
import AppLoading from './AppLoading';
import AppInitializer from './AppInitializer';
import {logError} from 'utils/Logger';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Chat} from "../screens";

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [isReady, setIsReady] = useState<boolean>(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={async () => {
          await AppInitializer.initAsync();
        }}
        onFinish={() => setIsReady(true)}
        onError={logError}
      />
    );
  }

  return (
    <Provider store={getStore()}>
      <Suspense fallback={<Text>...</Text>}>
        <SafeAreaProvider>
          <Chat />
        </SafeAreaProvider>
      </Suspense>
    </Provider>
  );
};

export default App;
