import React, { memo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Vibration,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';

// Constants
const COLORS = {
  white: '#FFFFFF',
  darkBlue: '#001F3F',
  textGray: '#666',
  darkGray: '#1A1A1A',
  error: '#FF0000',
};

// Optimized Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 46,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 26,
    marginBottom: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'transparent', // Default border
  },
  inputError: {
    borderColor: COLORS.error, // Highlight on error
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 15,
  },
  loginButton: {
    backgroundColor: COLORS.darkBlue,
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
  },
});

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();

  // Validation functions
  const validatePhoneNumber = (text) => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    if (cleanedText.length <= 10) {
      setPhoneNumber(cleanedText);
      setPhoneError(cleanedText.length === 10 ? '' : 'Phone number must be 10 digits');
    }
    return cleanedText.length === 10;
  };

  const validatePassword = (text) => {
    setPassword(text);
    setPasswordError(text.length >= 6 ? '' : 'Password must be at least 6 characters');
    return text.length >= 6;
  };

  // Handle login
  const handleLogin = () => {
    const isPhoneValid = validatePhoneNumber(phoneNumber);
    const isPasswordValid = validatePassword(password);

    if (isPhoneValid && isPasswordValid) {
      // Successful login
      navigation.navigate('Home');
    } else {
      // Validation failed - trigger vibration
      Vibration.vibrate(200); // Vibrate for 200ms
    }
  };

  return (
    <Layout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Text style={styles.logo}>V</Text>

        <TextInput
          style={[styles.input, phoneError ? styles.inputError : null]}
          placeholder="Phone Number"
          value={phoneNumber}
          keyboardType="phone-pad"
          onChangeText={(text) => validatePhoneNumber(text)}
          maxLength={10}
          autoCapitalize="none"
          placeholderTextColor={COLORS.textGray}
        />
        {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

        <TextInput
          style={[styles.input, passwordError ? styles.inputError : null]}
          placeholder="Password"
          value={password}
          onChangeText={(text) => validatePassword(text)}
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor={COLORS.textGray}
        />
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default memo(LoginScreen);