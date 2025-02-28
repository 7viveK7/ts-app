import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Easing,
 
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  const letters = 'Achyver'.split('');
  const windowWidth = Dimensions.get('window').width;

  // Animation values for letters appearance
  const letterAnimations = useRef(letters.map(() => new Animated.Value(0))).current;
  // Separate animation values for pulsating neon glow on each letter (textShadowRadius)
  const glowAnimations = useRef(letters.map(() => new Animated.Value(0))).current;
  // Light trail animation over the letters
  const trailAnim = useRef(new Animated.Value(-200)).current;
  // Ripple effect behind the text to simulate fiery energy
  const rippleAnim = useRef(new Animated.Value(0)).current;
  // Fog overlay animation for a gentle drifting mist effect
  const fogAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate each letter: fade in, scale up, translate upward and rotate from -10deg to 0
    const letterEntranceAnimations = letters.map((_, i) =>
      Animated.timing(letterAnimations[i], {
        toValue: 1,
        duration: 600,
        delay: i * 150,
        useNativeDriver: true,
      })
    );
    Animated.stagger(150, letterEntranceAnimations).start();

    // Looping glow animation for each letter to pulsate the neon effect
    letters.forEach((_, i) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowAnimations[i], {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
          Animated.timing(glowAnimations[i], {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }),
        ])
      ).start();
    });

    // Continuous light trail animation over the text (similar to Netflix intro)
    Animated.loop(
      Animated.timing(trailAnim, {
        toValue: windowWidth,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Ripple effect animation behind the text for that fiery, energy ripple
    Animated.loop(
      Animated.sequence([
        Animated.timing(rippleAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(rippleAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Fog animation: gentle horizontal drift to simulate subtle mist moving across the screen
    Animated.loop(
      Animated.timing(fogAnim, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [
    letters,
    letterAnimations,
    glowAnimations,
    trailAnim,
    windowWidth,
    rippleAnim,
    fogAnim,
  ]);

  return (
    <ImageBackground
      source={{
        uri: 'https://api.a0.dev/assets/image?text=cinematic%20high%20tech%20dark%20futuristic%20background%20with%20mist%20and%20fog&aspect=16:9',
      }}
      style={styles.background}
    >
      {/* Dark gradient overlay to intensify the mood */}
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}
        style={StyleSheet.absoluteFill}
      />
      {/* Animated fog overlay with subtle horizontal drift */}
      <Animated.Image
        source={{
          uri: 'https://api.a0.dev/assets/image?text=subtle%20mist%20and%20fog%20overlay',
        }}
        style={[
          styles.fog,
          {
            transform: [
              {
                translateX: fogAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-30, 30],
                }),
              },
            ],
          },
        ]}
        blurRadius={3}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {/* Ripple effect behind the text for a fiery energy ripple */}
          <Animated.View
            style={[
              styles.ripple,
              {
                transform: [
                  {
                    scale: rippleAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 2.5],
                    }),
                  },
                ],
                opacity: rippleAnim.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0.8, 0.2, 0],
                }),
              },
            ]}
          />
          {letters.map((letter, index) => (
            <Animated.Text
              key={`letter-${index}`}
              style={[
                styles.letter,
                {
                  opacity: letterAnimations[index],
                  transform: [
                    {
                      scale: letterAnimations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1],
                      }),
                    },
                    {
                      translateY: letterAnimations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                    {
                      rotate: letterAnimations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: ['-10deg', '0deg'],
                      }),
                    },
                  ],
                  // Pulsating text shadow to simulate a neon glow effect
                  textShadowRadius: glowAnimations[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 20],
                  }),
                },
              ]}
            >
              {letter}
            </Animated.Text>
          ))}
          {/* Light trail effect overlay running across the text */}
          <Animated.View style={[styles.trail, { transform: [{ translateX: trailAnim }] }]}>
            <LinearGradient
              colors={['transparent', 'rgba(255,255,255,0.8)', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  fog: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  letter: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#0ff',
    textShadowColor: '#00ffe0',
    textShadowOffset: { width: 0, height: 0 },
  },
  ripple: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#0ff',
    alignSelf: 'center',
  },
  trail: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 80,
  },
});