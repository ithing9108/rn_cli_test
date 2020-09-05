import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import SQLite from 'react-native-sqlite-storage';
export default ({ navigation }) => {

    const db = SQLite.openDatabase(
        {
          name: 'TestDB.db',
          location: 'default',
          createFromLocation: '~www/TestDB.db',
        },
        () => {},
        error => {
          console.log(error);
        }
      );
      const [user, setUser] = useState([{id:"0", name:"def"}]);
      const getDBUser = () => {
          

        db.transaction(tx => {
            tx.executeSql('SELECT * FROM test;', [], (tx, results) => {
              const rows = results.rows;
              let users = [];
      
              for (let i = 0; i < rows.length; i++) {
                users.push({
                  ...rows.item(i),
                });
              }
      
              setUser(users);
            });
          });
      };
      useEffect(getDBUser,[]);

      const renderUserList = user.map(
          ele => (
              <Text key={ele.id}>{ele.name}</Text>
          )
      )
    return (
        <View>
            <Text>Rooms</Text>
            {renderUserList}
        </View>
    )
}