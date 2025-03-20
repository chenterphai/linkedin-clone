import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from "@expo/vector-icons"
import colors from '@/libs/colors'
import { Pressable, View, StyleSheet, Text } from 'react-native'

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.PRIMARY,
                tabBarInactiveTintColor: colors.GRAY
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({ focused, size, color }) =>
                        <FontAwesome name="home" size={28} color={color} />,
                    tabBarLabel: "Home"
                }}
            />
            <Tabs.Screen
                name='network'
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <FontAwesome size={size} color={color}
                            name='users' />,
                    tabBarLabel: "Network"
                }}
            />
            <Tabs.Screen name='post'
                options={{
                    tabBarButton: () =>
                        <View style={styles.buttonPost} >
                            <Pressable style={styles.button}>
                                <FontAwesome name='plus-square' color={colors.GRAY} size={28} />
                                <Text style={styles.buttonText}>Post</Text>
                            </Pressable>
                        </View>
                }}
            />
            <Tabs.Screen name='notification'
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome name='bell' color={color} size={24} />,
                    tabBarLabel: "Notification"
                }}
            />
            <Tabs.Screen name='job'
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <FontAwesome name='briefcase' color={color} size={size} />,
                    tabBarLabel: "Jobs"
                }}
            />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    buttonPost: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 6
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        gap: 3
    },
    buttonText: {
        fontSize: 10,
        color: colors.GRAY
    }
})