import { useState } from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { getAllLaptops } from "../restWeb/restLaptops";
import { Button } from "react-native";
import { ListItem, Icon, FAB } from "@rneui/themed";

export const ScreenList = ({ navigation }) => {
  const LaptopsItem = ({ item }) => {
    return (
      <ListItem>
        <Icon name="desktop-mac" type="MaterialCommunityIcons" color="grey" />
        <ListItem.Content style={{ backgroundColor: "lightblue" }}>
          <ListItem.Title
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignItems: "center",
              paddingInline: 1,
            }}
          >
            {item.marca}
          </ListItem.Title>
          <ListItem.Subtitle> {item.procesador} </ListItem.Subtitle>
          <ListItem.Subtitle> Memoria: {item.memoria} </ListItem.Subtitle>
          <ListItem.Subtitle> Disco: {item.disco} </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  const refreshList = (itemLaptops) => {
    setLaptopsList(itemLaptops);
  };

  const [laptopsList, setLaptopsList] = useState([{}]);

  return (
    <View>
      <View >
        <Button
          title="Consultar"
          onPress={() => {
            getAllLaptops(refreshList);
          }}
        />
      </View>

      <View >
        <FlatList
          data={laptopsList}
          renderItem={({ item }) => {
            return <LaptopsItem item={item} />;
          }}
        />
      </View>
          
      <View style={styles.buttonFlotante}>
        <FAB
          style= {{width: 60}}
          color="lightblue"
          title="+"
          onPress={() => {
            navigation.navigate("LaptopsForm");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLista: {
    flex: 8,
    flexDirection: "column",
    width: 1000,
    backgroundColor: 'red'

  },

  buttonFlotante: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 80,
    paddingRight: 20,
  },

  button: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
  },
});
