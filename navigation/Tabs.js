import React from "react";
import Friends from "../screen/Friends"
import Rooms from "../screen/Rooms"
import Mail from "../screen/Mail"
import AppList from "../screen/AppList"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Friend" component={Friends}/>
            <Tabs.Screen name="Room" component={Rooms}/>
            <Tabs.Screen name="Mail" component={Mail}/>
            <Tabs.Screen name="AppList" component={AppList}/>
        </Tabs.Navigator>
    );
}