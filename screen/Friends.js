import React from "react";
import { View, Text, Button } from "react-native";
export default ({ navigation }) => {
    return (
        <View>
            <Text>Friends</Text>
            <Button 
                onPress = {() => navigation.navigate("Detail")}
                title="Go to Detail"
            />
        </View>
    )
} 