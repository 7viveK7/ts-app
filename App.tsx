
import React, { useEffect } from 'react';
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
// import Layout from './src/components/Layout';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigations';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
  //  const insets=useSafeAreaInsets()

  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  // console.log({insets})

  return (<SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar />
      <AppNavigator />
    </View>
  </SafeAreaProvider>)
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 20,
  },
  contentText: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default App;

// function alert(message: string): void {
//   window.alert(message);
// }
