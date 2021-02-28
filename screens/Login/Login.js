import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../../firebase'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(err => alert(err.message))
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            console.log('auth', authUser)
            if (authUser) {
                navigation.replace("Home")
            }
        })

        return unsubscribe;
    }, [])


    return (
        <View behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://seeklogo.com/images/S/signal-logo-20A1616F60-seeklogo.com.png"
            }} style={{ width: 100, height: 100 }} />
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={text => setEmail(text)} />
                <Input onSubmitEditing={signIn} placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)} />
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn} />
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    },

})
