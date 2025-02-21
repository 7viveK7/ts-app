import React from 'react';
import { Text,  StyleSheet, View } from 'react-native';
import Layout from './src/components/Layout';
// import Layout from "./Layout";

const HeaderComponent = () => <Text style={styles.headerText}>Header</Text>;
const FooterComponent = () => <Text style={styles.footerText}>Footer</Text>;
const ContentComponent = () => (
  <View>
    <Text style={styles.contentText}>Welcome to the app!</Text>
    {/* <Button title="Click Me" onPress={() => alert("Button clicked!")} /> */}
  </View>
);

const App = () => (
  <Layout header={<HeaderComponent />} footer={<FooterComponent />}>
    <ContentComponent />
  </Layout>
);

const styles = StyleSheet.create({
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

function alert(message: string): void {
  window.alert(message);
}
