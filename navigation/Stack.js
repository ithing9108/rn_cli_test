import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Detail from "../screen/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator> 
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Tabs" component={Tabs}/>
        <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
);