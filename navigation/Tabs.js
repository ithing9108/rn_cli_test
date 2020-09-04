import React from "react";
import Movies from "../screen/Movies"
import TV from "../screen/TV"
import Search from "../screen/Search"
import Fav from "../screen/Fav"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="TV" component={TV}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="Fav" component={Fav}/>
        </Tabs.Navigator>
    );
}