import { StyleSheet, Text, View } from "react-native";

export default function SobreOTema() {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Sobre o tema
      </Text>

      <Text style={styles.texto}>
        O projeto é uma lista de filmes!
      </Text>

      <Text style={styles.texto}>
        Os personagens são os melhores de cada filme/série
      </Text>

      <Text style={styles.texto}>
        Neste aplicativo, o tema é apresentado por meio de
        uma lista dos filmes que eu mais gosto.
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: "center",

    padding: 25,

    backgroundColor: "#f5f5f5"

  },

  titulo: {

    fontSize: 28,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 25

  },

  texto: {

    fontSize: 17,

    textAlign: "justify",

    lineHeight: 25,

    marginBottom: 18

  }

});