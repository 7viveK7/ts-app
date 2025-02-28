
import React, { useEffect } from 'react';
import { StyleSheet, Platform, SafeAreaView, StatusBar, View } from 'react-native';
// import Layout from './src/components/Layout';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './src/navigation/AppNavigations';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
// import Layout from "./Layout";

// const HeaderComponent = () => <Text style={styles.headerText}>Header</Text>;
// const FooterComponent = () => <Text style={styles.footerText}>Footer</Text>;
// const ContentComponent = () => (
//   <View>
//     <Text style={styles.contentText}>Welcome to the app!</Text>
//     {/* <Button title="Click Me" onPress={() => alert("Button clicked!")} /> */}
//   </View>
// );

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


//   //return(
//   <Layout header={<HeaderComponent />} footer={<FooterComponent />}>
//   <ContentComponent />
// </Layout>
// )

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
