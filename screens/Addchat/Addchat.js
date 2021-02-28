import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { db } from '../../firebase'

const Addchat = ({ navigation }) => {
    const [input, setInput] = useState("")
    const createChat = async () => {
        await db.collection("chats").add({
            chatName: input,

        }).then(() => {
            navigation.goBack()
        }).catch(err => alert(err.message))

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add New Chat",
            headerBackTitle: "back"

        })
    }, [])
    return (
        <View style={styles.container}>
            <Input placeholder="Enter Change Name" value={input} onChangeText={text => setInput(text)}
                leftIcon={<Icon name="wechat" type="antdesign" size={24} color="black" />} />
            <Button onPress={createChat} title="Create New Chat" />
        </View>
    )
}

export default Addchat

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%"
    }
})
