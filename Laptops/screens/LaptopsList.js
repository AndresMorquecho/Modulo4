
import { useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { getAllLaptops } from "../restWeb/restLaptops";
import { Button } from "react-native";
import { ListItem, Icon } from '@rneui/themed';

export const ScreenList = () => {

  const LaptopsItem = ({item}) => {
    return (
        <ListItem >
         <Icon name="desktop-mac" type="MaterialCommunityIcons" color="grey" />
        <ListItem.Content style= {{backgroundColor: 'lightblue'}}>

            <ListItem.Title style={{fontSize: 18, justifyContent: 'center', alignItems: 'center', paddingInline:1}}> {item.marca} </ListItem.Title>
            <ListItem.Subtitle> {item.procesador} </ListItem.Subtitle>
            <ListItem.Subtitle> Memoria: {item.memoria} </ListItem.Subtitle>
            <ListItem.Subtitle> Disco: {item.disco} </ListItem.Subtitle>

        </ListItem.Content>

        </ListItem>
    );
  };


  const refreshList = (itemLaptops)=>{

    setLaptopsList(itemLaptops)


  }



  const [laptopsList, setLaptopsList] = useState([{}]);

  return (
    <View>
      <View></View>

      <View>
        <Button title="Consultar" onPress={() => {

            getAllLaptops(refreshList);


        }} />
      </View>

      <View>
        <FlatList
          data={laptopsList}
          renderItem={({item}) => {
            return <LaptopsItem
                item = {item}
            
            />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
