import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import CustomListItem from '../../components/CustomListItem'
import { Avatar, Button } from 'react-native-elements'
import { auth, db } from '../../firebase'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

const Home = ({ navigation }) => {
    const [chat, setChats] = useState([])
    const signout = () => {
        auth.signOut().then(
            navigation.replace("login")
        )
    }
    useEffect(() => {
        const unsubscribe = db.collection("chats").onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    }, [])
    console.log('thisaaaaa', chat)
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signout} activeOpacity={0.5} >
                        <Avatar rounded source={{ uri: "No photo" }} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 80, marginRight: 20 }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Addchat")} activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])

    const enterChat = (id, chatName) => {
        navigation.navigate('Chat', {
            id,
            chatName
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <StatusBar style="auto" />
                {
                    chat.map(({ id, data: { chatName } }) => (
                        <CustomListItem id={id} chatName={chatName} enterChat={enterChat} key={id} />
                    ))
                }
                <View style={{ marginTop: 20 }} />
                <Button onPress={signout} title="LOGOUT" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: "100%",
    }
})
