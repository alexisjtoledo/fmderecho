import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Constants from 'expo-constants'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

export default class Profesorado extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Ionicons
                        name={
                            Platform.OS === 'ios'
                                ? 'ios-hammer'
                                : 'md-hammer'
                        }
                        size={80}
                        color={Colors.textColor}
                    />
                <Text style={styles.text}>Próximamente...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: Layout.window.width,
        minHeight: Layout.window.height - Constants.statusBarHeight - 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.lighterBackground,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    }
});
