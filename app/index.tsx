import { StatusBar } from "expo-status-bar"
import { StyleSheet , View , Text } from "react-native"
import { Link } from 'expo-router'
export default function Home () {

    return (
        <View style={styles.container}>
            <Text>Hello , Aora !</Text>
            <StatusBar style="auto" />
            <Link href='/profile ' style={{color : 'blue'}}>Go to Profile</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex: 1 , 
      alignItems: 'center', 
      justifyContent: 'center'
    }
  })