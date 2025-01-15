import { View, Text, StyleSheet, FlatList } from "react-native";
import {Button} from "@rneui/base"
import {getAllContacts} from "../rest_client/contactos"
import { useState, useSyncExternalStore } from "react";
 

export const ContactsList = () => {



  const [contactsList, setContactsList] = useState([]);


  fnRefreshList = (contacts)=>{
    console.log("refresh list", contacts);
    setContactsList(contacts);

  }


  const ItemContacts = ({item})=>{
    return(

      <View>

        <View>
          <Text> ID Contacto:  {item.id}</Text>
        </View>

        <View>
          <Text>Nombre: {item.nombre}</Text>
        </View>
        

      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Lista de contactos</Text>
      <Button

        title="Press me"
        onPress={()=>{
          getAllContacts(fnRefreshList);

          
        }}
      />

      <FlatList

        data={contactsList}
        renderItem={({item, index})=>{
          return <ItemContacts

            item = {item}
            indice = {index}
          
          />

         
        }}
      
      />
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
