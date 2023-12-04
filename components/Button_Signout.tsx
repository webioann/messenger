import { StyleSheet, Text, Alert, Pressable } from 'react-native'
import React, { useContext } from 'react'
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserContext } from '../context/UserContext';
import { COLORS, G } from '../constants/SIZES';

const Button_Signout = () => {
    const currentUser = useContext(UserContext)

    const signoutCurrentUser = () => {
        auth().signOut()
        .then(() => Alert.alert('You are logged out'))
        .catch(error => console.log(`_AUTH_ERROR_ --> ${error}`))
    }
    
    return (
        currentUser && <Pressable onLongPress={signoutCurrentUser} style={styles.logout}>
            <Icon name='logout' size={24} color={COLORS.LIGHT}/>
            <Text style={{color: COLORS.LIGHT}}>Logout</Text>
        </Pressable>
    )
}

export default Button_Signout;

const styles = StyleSheet.create({
    logout: {
        ...G.row,
        width: 90,
        borderColor: 'red',
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        backgroundColor: COLORS.DARK,
    },
})
