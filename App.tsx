import React from "react";
import {
    View,  // Like a div, wrap a things
    Text,  // To write text, strings
    SafeAreaView  //Simply to avoid notches
} from "react-native";

function App() {
    return (
        // In the world of JSX starting tag needs to have an end tag
        <SafeAreaView>
            <View>
                <Text>Hello World !</Text>
            </View>
        </SafeAreaView>
    )
}

export default App;