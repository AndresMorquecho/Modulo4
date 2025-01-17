import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Input, Button } from "@rneui/base";
import { GuardarLaptopRest, editarLaptop } from "../restWeb/restLaptops";


export const LaptopsForm = ({navigation,route}) => {


  let laptopRetrieved = route.params.itemParam
  let isNew = true

  if(laptopRetrieved != null){
    isNew = false

  }


  const [ID, setID] = useState(isNew?null:laptopRetrieved.id.toString());
  const [marca, setMarca] = useState(isNew?null:laptopRetrieved.marca);
  const [procesador, setProcesador] = useState(isNew?null:laptopRetrieved.procesador);
  const [memoria, setMemoria] = useState(isNew?null:laptopRetrieved.memoria);
  const [disco, setDisco] = useState(isNew?null:laptopRetrieved.disco);




  const ShowMessage = () => {
    console.log("ShowMessage se está ejecutando");
    Alert.alert("Exito", isNew?"Registro creado con exito":"Registro editado con exito");
    navigation.goBack();
  };

  const GuardarLaptop = () => {
    GuardarLaptopRest(
      {
        id: ID,
        marca: marca,
        procesador: procesador,
        memoria: memoria,
        disco: disco,
      },
      ShowMessage
    );
  };


  const EditarContacto=()=>{

    console.log("editando")
    editarLaptop({
      id: ID,
      marca: marca,
      procesador: procesador,
      memoria: memoria,
      disco: disco,
    },ShowMessage);
  }

  return (
    <View>
      <Input
        placeholder="Ingrese ID"
        keyboardType="number-pad"
        value={ID}
        editable={isNew}
        onChangeText={(value) => {
          setID(value);
        }}
      />
      <Input
        placeholder="Ingrese Marca"
        value={marca}
        onChangeText={(value) => {
          setMarca(value);
        }}
      />
      <Input
        placeholder="Ingrese Procesador"
        value={procesador}
        onChangeText={(value) => {
          setProcesador(value);
        }}
      />
      <Input
        placeholder="Ingrese memoria"
        value={memoria}
        onChangeText={(value) => {
          setMemoria(value);
        }}
      />
      <Input
        placeholder="Ingrese disco"
        value={disco}
        onChangeText={(value) => {
          setDisco(value);
        }}
      />

      <Button title="Guardar" onPress={isNew?GuardarLaptop:EditarContacto} />
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
