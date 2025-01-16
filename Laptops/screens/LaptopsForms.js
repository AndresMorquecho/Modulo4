import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Input, Button } from "@rneui/base";
import { GuardarLaptopRest } from "../restWeb/restLaptops";

export const LaptopsForm = ({navigation}) => {
  const [ID, setID] = useState();
  const [marca, setMarca] = useState();
  const [procesador, setProcesador] = useState();
  const [memoria, setMemoria] = useState();
  const [disco, setDisco] = useState();

  const ShowMessage = () => {
    console.log("ShowMessage se está ejecutando");
    Alert.alert("Exito", "Registro creado con exito");
  };

  const GuardarLaptop = () => {
    navigation.goBack();
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

  return (
    <View>
      <Input
        placeholder="Ingrese ID"
        keyboardType="number-pad"
        value={ID}
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

      <Button title="Guardar" onPress={GuardarLaptop} />
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
