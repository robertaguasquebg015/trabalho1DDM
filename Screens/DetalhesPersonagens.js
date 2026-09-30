import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default function DetalhesPersonagens({ route, navigation }) {

  const { melhor_personagem } = route.params;

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        {melhor_personagem.nome}
      </Text>

      <Text style={styles.informacao}>
        Personagem: {melhor_personagem.filmes}
      </Text>

      <TouchableOpacity

        style={styles.botaoVoltar}

        onPress={() => navigation.goBack()}

      >

        <Text style={styles.textoBotao}>
          Voltar
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    alignItems: "center",

    padding: 25,

    backgroundColor: "#f5f5f5"

  },

  titulo: {

    fontSize: 26,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 15

  },

  informacao: {

    fontSize: 17,

    marginBottom: 25

  },

  botaoVoltar: {

    backgroundColor: "#48aa44",

    width: "100%",

    padding: 15,

    borderRadius: 10,

    alignItems: "center"

  },

  textoBotao: {

    color: "#fff",

    fontWeight: "bold",

    fontSize: 16

  }

});