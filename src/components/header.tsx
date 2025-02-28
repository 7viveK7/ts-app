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

    header: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.darkGray,
    },
    headerIcon: {
        fontSize: 24,
        color: COLORS.primary,
    },
    content: {
        flex: 1,
        padding: 20,
    },
});

const Header = () => {
    const insets = useSafeAreaInsets();

    return (<View style={{ ...styles.header, paddingTop: insets.top }}>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
            <Text style={styles.headerIcon}>👤</Text> {/* Profile Icon */}
        </TouchableOpacity>
    </View>

    );
};

export default Header