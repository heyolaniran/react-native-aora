import { StyleSheet, View , Text } from "react-native"
import {Slot , Stack } from 'expo-router'

export default function RootLayout() {

    return (
      <Stack>
        <Stack.screen name='index' options={{headerShown : false}}/>
      </Stack>
    )

}


