import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, TextInput } from 'react-native'
import { Platform } from 'react-native'

const ChatScreen = ({ navigation, route }) => {
    const [input, setInput] = useState("")

    const sendMessage = () => {

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerTitleAlign: "left",
            headerTitle: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Avatar rounded source={{ uri: "No photo" }} />
                    <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}> {route.params.chatName} </Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="white" style={{ marginLeft: 20 }} onPress={() => navigation.goBack()} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.container}>
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container1}
                keyboardVerticalOffset={90}
            >
                <>
                    <ScrollView>

                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput value={input} onChangeText={text => setInput(text)} placeholder="Enter Message" style={styles.textInput} />
                    </View>
                    <TouchableOpacity onPress={sendMessage}>
                        <Ionicons name="send" size={24} color="red" />
                    </TouchableOpacity>
                </>
            </KeyboardAvoidingView>
            <Text>{route.params.chatName}</Text>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: 20,
        justifyContent: "space-between",
        width: "100%",

    },
    container1: {

    },
    footer: {
        marginLeft: 30
    },
    textInput: {

    }
})
