import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text, Image } from 'react-native-elements'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../../firebase'

const Register = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login"
        })
    }, [navigation])
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl || "No Photo"
                })
                console.log('this is user', authUser)
            })
            .catch(err => alert(err.message))
    }


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginTop: 50 }}> Create a Signal Account</Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full Name" autoFocus type="text" value={name} onChangeText={text => setName(text)} />
                <Input placeholder="Email" type="email" value={email} onChangeText={text => setEmail(text)} />
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)} />
                <Input placeholder="imageUrl" type="text" value={imageUrl} onChangeText={text => setImageUrl(text)} onSubmitEditing={register} />
            </View>
            <Button containerStyle={styles.button} raised onPress={register} title="Register" />
            <View style={{ height: 100 }} />
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        marginTop: 50,
        backgroundColor: "white",


    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
