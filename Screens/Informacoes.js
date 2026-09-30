import { StyleSheet, Text, View } from "react-native";

export default function Informacoes() {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Sobre o aplicativo
      </Text>

      <Text style={styles.texto}>
        O aplicativo é uma lista de filmes e séries criado por Roberta Guasque, do 6 info!
      </Text>

      <Text style={styles.texto}>
        O projeto tem navegação, síntese de voz e listas.
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

    marginBottom: 20

  }

});