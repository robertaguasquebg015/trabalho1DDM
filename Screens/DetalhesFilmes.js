
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Alert,
} from "react-native";

import * as Speech from "expo-speech";

export default function DetalhesFilmes({ route, navigation }) {
  const filmes = route?.params?.filmes;

  if (!filmes) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Filme não encontrado</Text>

        <Text style={styles.sinopse}>
          Não foi possível carregar as informações.
        </Text>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Abre o link do filme
  const abrirLink = async () => {
    const url = filmes.url;

    if (typeof url !== "string" || !url.trim()) {
      Alert.alert(
        "Link indisponível",
        "Não há um link cadastrado para este filme ou série."
      );
      return;
    }

    const urlValida = url.trim();

    if (!/^https?:\/\/\S+/i.test(urlValida)) {
      Alert.alert(
        "Link inválido",
        "O endereço informado não é válido."
      );
      return;
    }

    try {
      await Linking.openURL(urlValida);
    } catch (error) {
      Alert.alert(
        "Erro ao abrir",
        "Não foi possível abrir o link. Tente novamente."
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {filmes.imagem ? (
        <Image
          source={filmes.imagem}
          style={styles.imagem}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagemAusente}>
          <Text style={styles.textoImagemAusente}>
            Imagem indisponível
          </Text>
        </View>
      )}

      <Text style={styles.titulo}>
        {filmes.nome || "Título não informado"}
      </Text>

      <View style={styles.informacoes}>
        <Text style={styles.informacao}>
          Ano: {filmes.ano || "Não informado"}
        </Text>

        <Text style={styles.informacao}>
          Gênero: {filmes.genero || "Não informado"}
        </Text>

        <Text style={styles.informacao}>
          Melhor personagem:{" "}
          {filmes.melhor_personagem || "Não informado"}
        </Text>
      </View>

      <View style={styles.secaoSinopse}>
        <Text style={styles.tituloSinopse}>Sinopse</Text>

        <Text style={styles.sinopse}>
          {filmes.sinopse ||
            filmes.review ||
            "Nenhuma sinopse cadastrada para este título."}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={abrirLink}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>
          Ler sobre o filme
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => {
          Speech.stop();
          navigation.goBack();
        }}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 25,
    backgroundColor: "#e6f0e2",
  },

  imagem: {
    width: 260,
    height: 350,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#c8c8c8",
  },

  imagemAusente: {
    width: 260,
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#d0d0d0",
    alignItems: "center",
    justifyContent: "center",
  },

  textoImagemAusente: {
    fontSize: 16,
    color: "#555555",
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#29472a",
    marginBottom: 16,
  },

  informacoes: {
    width: "100%",
    backgroundColor: "#d4e5ce",
    padding: 15,
    borderRadius: 10,
  },

  informacao: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 8,
  },

  secaoSinopse: {
    width: "100%",
    marginTop: 18,
    marginBottom: 20,
  },

  tituloSinopse: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#29472a",
    marginBottom: 8,
  },

  sinopse: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
    color: "#333333",
  },

  botao: {
    backgroundColor: "#477d43",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  botaoVoltar: {
    backgroundColor: "#555555",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  textoBotao: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

