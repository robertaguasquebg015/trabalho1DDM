import { StyleSheet, Text, View } from "react-native";

export default function SobreOTema() {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Sobre o tema
      </Text>

      <Text style={styles.texto}>
        A música é uma forma de expressão artística presente
        em diferentes culturas e períodos históricos.
      </Text>

      <Text style={styles.texto}>
        Os artistas utilizam diferentes gêneros e estilos
        musicais para produzir obras que podem representar
        sentimentos, experiências e diferentes contextos.
      </Text>

      <Text style={styles.texto}>
        Neste aplicativo, o tema é apresentado por meio de
        um catálogo de álbuns e artistas, permitindo consultar
        informações sobre diferentes trabalhos musicais.
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