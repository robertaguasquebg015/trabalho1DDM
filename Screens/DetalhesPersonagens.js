
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function DetalhesPersonagens({ route, navigation }) {
  const personagem = route?.params?.melhor_personagem;

  const nome =
    typeof personagem === "string"
      ? personagem
      : personagem?.nome || "Personagem não informado";

  const filme =
    typeof personagem === "object" && personagem !== null
      ? personagem.filmes
      : route?.params?.filme || "Filme ou série não informado";

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nome}</Text>

      <Text style={styles.subtitulo}>Detalhes do personagem</Text>

      <View style={styles.cartao}>
        <Text style={styles.rotulo}>Personagem</Text>
        <Text style={styles.informacao}>{nome}</Text>

        <Text style={styles.rotulo}>Filme ou série</Text>
        <Text style={styles.informacao}>{filme}</Text>
      </View>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 25,
    backgroundColor: "#e6f0e2",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#29472a",
    marginBottom: 8,
  },

  subtitulo: {
    fontSize: 16,
    color: "#477d43",
    marginBottom: 20,
  },

  cartao: {
    width: "100%",
    backgroundColor: "#d4e5ce",
    padding: 18,
    borderRadius: 10,
    marginBottom: 25,
  },

  rotulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#29472a",
    marginBottom: 5,
  },

  informacao: {
    fontSize: 17,
    color: "#333333",
    marginBottom: 18,
  },

  botaoVoltar: {
    backgroundColor: "#477d43",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
