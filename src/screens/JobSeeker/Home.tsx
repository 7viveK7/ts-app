import React, { memo } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Layout from '../../components/Layout';
import Header from '../../components/header';
import Footer from '../../components/Footer';

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
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    gradient: {
        flex: 1,
    },
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
    welcomeCard: {
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
        color: COLORS.white,
        marginBottom: 10,
    },
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

const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    return (<Layout
    >
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

        {/* Header */}
       <Header />

        {/* Main Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Welcome Card */}
            <View style={styles.welcomeCard}>
                <Text style={styles.welcomeText}>Welcome Back!</Text>
                <Text style={{ color: COLORS.white, fontSize: 16 }}>
                    Here's what's new today
                </Text>
            </View>

            {/* Features Section */}
            <View style={styles.featureSection}>
                <Text style={styles.featureTitle}>Quick Actions</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.featureCard}>
                        <Text style={styles.featureCardText}>Pay Bills</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureCard}>
                        <Text style={styles.featureCardText}>Transfer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureCard}>
                        <Text style={styles.featureCardText}>History</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            {/* Additional Content */}
            <View style={styles.featureSection}>
                <Text style={styles.featureTitle}>Recent Activity</Text>
                <View style={styles.featureCard}>
                    <Text style={styles.featureCardText}>Latest transactions here</Text>
                </View>
            </View>
        </ScrollView>

        {/* Footer */}
       <Footer/>
    </Layout>

    );
};

export default memo(HomeScreen);