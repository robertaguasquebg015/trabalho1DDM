import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import * as Speech from "expo-speech";

const filmes = [

  {id: "1", nome: "Orgulho e preconceito", melhor_personagem: "Lizzie"},

  {id: "2", nome: "10 coisas que odeio em você", melhor_personagem: "Kat"},

  {id: "3", nome: "Little Women", melhor_personagem: "Jo March"},

  {id: "4", nome: "Como perder um homem em 10 dias", melhor_personagem: "Andie Anderson"},

  {id: "5", nome: "Gilmore Girls", melhor_personagem: "Lorelai"},

  {id: "6", nome: "Greys anatomy", melhor_personagem: "Lexie Grey"},

  {id: "7", nome: "Sociedade dos poetas mortos", melhor_personagem: "Neil"},

  {id: "8", nome: "The pitt", melhor_personagem: "Samira Mohan"},

  {id: "9", nome: "Harry Potter", melhor_personagem: "Hermione"},

  {id: "10", nome: "SUITS", melhor_personagem: "Donna"},

  {id: '11', nome: 'Before Sunrise', melhor_personagem: ''}

];

export default function Filmes({ navigation }) {

  const falar = (nome) => {

    Speech.speak(nome, {

      language: "en-US",

      pitch: 1.0,

      rate: 1.0

    });

  };

  const criaItem = ({ item }) => (

    <TouchableOpacity

      style={styles.item}

      onPress={() => {

        falar(item.nome);

        navigation.navigate("DetalhesFilmes", {
          filmes: item
        });

      }}

    >

      <Text style={styles.nome}>
        {item.nome}
      </Text>

      <Text style={styles.albuns}>
        Melhor_Personagem: {item.melhor_personagem}
      </Text>

    </TouchableOpacity>

  );

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Filmes/séries
      </Text>

      <Text style={styles.subtitulo}>
        Toque em um filme ou série e ouça seu nome!
      </Text>

      <FlatList

        data={filmes}

        renderItem={criaItem}

        keyExtractor={item => item.id}

        showsVerticalScrollIndicator={false}

      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 20,

    backgroundColor: "#f5f5f5"

  },

  titulo: {

    fontSize: 28,

    fontWeight: "bold",

    textAlign: "center",

    marginBottom: 5

  },

  subtitulo: {

    fontSize: 16,

    textAlign: "center",

    color: "#6dbb51",

    marginBottom: 20

  },

  item: {

    backgroundColor: "#70aa6d",

    padding: 20,

    marginBottom: 12,

    borderRadius: 10,

    elevation: 2

  },

  nome: {

    fontSize: 19,

    fontWeight: "bold",

    marginBottom: 5

  },

  albuns: {

    fontSize: 15,

    color: "#555"

  }

});