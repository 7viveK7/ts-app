import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
   
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Constants
const COLORS = {
    primary: '#0077BE',
    secondary: '#7CB9E8',
    white: '#FFFFFF',
    darkGray: '#333333',
    lightGray: '#E0E0E0',
};

// Styles
const styles = StyleSheet.create({
   
    featureSection: {
        marginBottom: 20,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.darkGray,
        marginBottom: 10,
    },
    featureCard: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        padding: 15,
        marginRight: 10,
        width: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    featureCardText: {
        fontSize: 16,
        color: COLORS.darkGray,
    },
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    footerItem: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: COLORS.darkGray,
        marginTop: 5,
    },
    footerIcon: {
        fontSize: 24,
        color: COLORS.primary,
    },
});

const Footer = () => {
    const insets = useSafeAreaInsets();

    return (<View style={{ ...styles.footer, paddingBottom: insets.bottom }}>
        <TouchableOpacity style={styles.footerItem}>
            <Text style={styles.footerIcon}>🏠</Text>
            <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
            <Text style={styles.footerIcon}>💸</Text>
            <Text style={styles.footerText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
            <Text style={styles.footerIcon}>📊</Text>
            <Text style={styles.footerText}>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
            <Text style={styles.footerIcon}>⚙️</Text>
            <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
    </View>
    );
};

export default Footer