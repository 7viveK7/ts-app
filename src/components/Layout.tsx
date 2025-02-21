import React from 'react';
import { View,StatusBar, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';
// import { StatusBar } from "expo-status-bar";

const Layout = ({ header=null, footer=null, children }) => {
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  />

      {/* Header */}
      <View style={styles.header}>
        {header}
      </View>

      {/* Content */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {footer}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151718', // Dark theme background
  },
  header: {
    height: 52, // Fixed height for header
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a7ea4',
  },
  content: {
    flex: 1, // Takes up remaining space
    backgroundColor: '#fff',
    padding: 16,
  },
  footer: {
    height: 65, // Fixed height for footer
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a7ea4',
  },
});

export default Layout;