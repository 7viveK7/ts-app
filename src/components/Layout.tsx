import React, { memo } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Define constants
const COLORS = {
  gradientStart: '#7CB9E8',
  gradientEnd: '#0077BE',
  background: '#151718',
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
   
  },
  gradient: {
    flex: 1,
  },
});

const Layout = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={styles.gradient}
    // useAngle={true}
    // angle={135}
    >
      <View
        style={[
          styles.layout,
          {
            // paddingTop: insets.top,
            // paddingBottom: insets.bottom,

          },
        ]}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {children}
      </View>
    </LinearGradient>
  );
};

export default memo(Layout);