
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import * as Speech from "expo-speech";

const filmes = [
  {
    id: "1",
    nome: "Orgulho e preconceito",
    ano: "2005",
    genero: "Romance e drama",
    melhor_personagem: "Elizabeth Bennet",
    sinopse:
      "Elizabeth Bennet conhece o reservado Sr. Darcy e, entre julgamentos e conflitos, os dois precisam superar o orgulho e os preconceitos para compreender seus sentimentos.",
    imagem: require("../assets/orgulhoepreconceito.jpg"),
    url: "https://www.imdb.com/find/?q=Pride%20and%20Prejudice%202005",
  },
  {
    id: "2",
    nome: "10 coisas que odeio em você",
    ano: "1999",
    genero: "Comédia romântica",
    melhor_personagem: "Kat Stratford",
    sinopse:
      "Bianca só pode namorar se sua irmã Kat também namorar. Um plano é criado para aproximar Kat de um rapaz, mas os sentimentos acabam tornando tudo mais complicado.",
    imagem: require("../assets/10coisas.jpg"),
    url: "https://www.imdb.com/find/?q=10%20Things%20I%20Hate%20About%20You",
  },
  {
    id: "3",
    nome: "Little Women",
    ano: "2019",
    genero: "Drama e romance",
    melhor_personagem: "Jo March",
    sinopse:
      "As irmãs March crescem durante a Guerra Civil Americana, enfrentando dificuldades, descobrindo seus sonhos e buscando independência, amor e seu próprio lugar no mundo.",
    imagem: require("../assets/littlewomen.jpg"),
    url: "https://www.imdb.com/find/?q=Little%20Women%202019",
  },
  {
    id: "4",
    nome: "Como perder um homem em 10 dias",
    ano: "2003",
    genero: "Comédia romântica",
    melhor_personagem: "Andie Anderson",
    sinopse:
      "Uma jornalista tenta fazer um homem terminar o relacionamento em dez dias para escrever uma matéria, enquanto ele aposta que conseguirá fazê-la se apaixonar por ele no mesmo período.",
    imagem: require("../assets/comoperder.jpg"),
    url: "https://www.imdb.com/find/?q=How%20to%20Lose%20a%20Guy%20in%2010%20Days",
  },
  {
    id: "5",
    nome: "Gilmore Girls",
    ano: "2000–2007",
    genero: "Comédia dramática",
    melhor_personagem: "Lorelai Gilmore",
    sinopse:
      "Em Stars Hollow, Lorelai e sua filha Rory vivem os desafios da família, dos estudos, dos relacionamentos e das mudanças da vida, mantendo uma relação marcada por amizade e cumplicidade.",
    imagem: require("../assets/gilmore.avif"),
    url: "https://www.imdb.com/find/?q=Gilmore%20Girls",
  },
  {
    id: "6",
    nome: "Grey's Anatomy",
    ano: "2005–atualidade",
    genero: "Drama médico",
    melhor_personagem: "Lexie Grey",
    sinopse:
      "Médicos de um hospital enfrentam casos complexos, decisões difíceis e situações pessoais que afetam suas vidas e relações dentro e fora do trabalho.",
    imagem: require("../assets/greys.avif"),
    url: "https://www.imdb.com/find/?q=Grey%27s%20Anatomy",
  },
  {
    id: "7",
    nome: "Sociedade dos poetas mortos",
    ano: "1989",
    genero: "Drama",
    melhor_personagem: "Neil Perry",
    sinopse:
      "Em uma escola tradicional, um professor de literatura inspira seus alunos a questionarem convenções, valorizarem a poesia e refletirem sobre seus próprios sonhos e escolhas.",
    imagem: {
      uri: "https://image.tmdb.org/t/p/w500/ai40gM7SUaGA6fthvsd87o8D2v8.jpg",
    },
    url: "https://www.imdb.com/find/?q=Dead%20Poets%20Society",
  },
  {
    id: "8",
    nome: "The Pitt",
    ano: "2025–atualidade",
    genero: "Drama médico",
    melhor_personagem: "Dra. Samira Mohan",
    sinopse:
      "A série acompanha profissionais de saúde durante plantões intensos em um pronto-socorro, mostrando a pressão, os dilemas e as decisões que fazem parte da rotina médica.",
    imagem: require("../assets/thepitt.jpg"),
    url: "https://www.imdb.com/find/?q=The%20Pitt",
  },
  {
    id: "9",
    nome: "Harry Potter",
    ano: "2001–2011",
    genero: "Fantasia e aventura",
    melhor_personagem: "Hermione Granger",
    sinopse:
      "Harry Potter descobre que é um bruxo e começa a estudar em Hogwarts, onde faz amizades, enfrenta desafios e descobre mais sobre seu passado e o mundo mágico.",
    imagem: {
      uri: "https://image.tmdb.org/t/p/w500/1stUIsjawROZxjiCMtqqXqgfZWC.jpg",
    },
    url: "https://www.imdb.com/find/?q=Harry%20Potter",
  },
  {
    id: "10",
    nome: "Suits",
    ano: "2011–2019",
    genero: "Drama jurídico",
    melhor_personagem: "Donna Paulsen",
    sinopse:
      "Em um escritório de advocacia de Nova York, Harvey Specter contrata Mike Ross, um jovem brilhante sem formação jurídica, e os dois precisam lidar com casos, segredos e disputas profissionais.",
    imagem: require("../assets/suits.jpg"),
    url: "https://www.imdb.com/find/?q=Suits",
  },
  {
    id: "11",
    nome: "Before Sunrise",
    ano: "1995",
    genero: "Romance e drama",
    melhor_personagem: "Céline",
    sinopse:
      "Jesse e Céline se conhecem em um trem e decidem passar uma noite caminhando por Viena, conversando sobre a vida, o amor e as possibilidades de um encontro inesperado.",
    imagem: require("../assets/before.jpg"),
    url: "https://www.imdb.com/find/?q=Before%20Sunrise",
  },
];

export default function Filmes({ navigation }) {
  const falar = (nome) => {
    Speech.stop();

    Speech.speak(nome, {
      language: "pt-BR",
      pitch: 1.0,
      rate: 1.0,
    });
  };

  const criaItem = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.areaFilme}
        activeOpacity={0.8}
        onPress={() => {
          falar(item.nome);

          navigation.navigate("DetalhesFilmes", {
            filmes: item,
          });
        }}
      >
        <Image
          source={item.imagem}
          style={styles.imagem}
          resizeMode="cover"
        />

        <View style={styles.textos}>
          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.ano}>{item.ano}</Text>

          <Text style={styles.personagem}>
            Personagem favorito: {item.melhor_personagem}
          </Text>

          <Text style={styles.toque}>
            Toque para ver os detalhes
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoPersonagem}
        activeOpacity={0.8}
        onPress={() => {
          Speech.stop();

          navigation.navigate("DetalhesPersonagens", {
            melhor_personagem: {
              nome: item.melhor_personagem,
              filmes: item.nome,
            },
          });
        }}
      >
        <Text style={styles.textoBotaoPersonagem}>
          Ver personagem
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Filmes e séries</Text>

      <Text style={styles.subtitulo}>
        Toque em um título para conhecer mais e ouvir seu nome.
      </Text>

      <FlatList
        data={filmes}
        renderItem={criaItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#29472a",
  },

  subtitulo: {
    fontSize: 15,
    textAlign: "center",
    color: "#527c4b",
    marginTop: 8,
    marginBottom: 18,
  },

  lista: {
    paddingBottom: 20,
  },

  item: {
    backgroundColor: "#dcebd8",
    marginBottom: 14,
    borderRadius: 12,
    padding: 12,
    elevation: 2,
  },

  areaFilme: {
    flexDirection: "row",
    alignItems: "center",
  },

  imagem: {
    width: 100,
    height: 135,
    borderRadius: 8,
    backgroundColor: "#c8c8c8",
  },

  textos: {
    flex: 1,
    marginLeft: 14,
  },

  nome: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#253d26",
    marginBottom: 5,
  },

  ano: {
    fontSize: 14,
    color: "#444444",
    marginBottom: 6,
  },

  personagem: {
    fontSize: 14,
    color: "#444444",
  },

  toque: {
    fontSize: 12,
    color: "#477d43",
    marginTop: 10,
  },

  botaoPersonagem: {
    backgroundColor: "#477d43",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: 12,
  },

  textoBotaoPersonagem: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
