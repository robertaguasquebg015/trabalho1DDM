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
    nome: "Orgulho e Preconceito",
    ano: "2005",
    genero: "Romance, drama",
    melhor_personagem: "Elizabeth Bennet (Lizzie)",
    sinopse:
      "Elizabeth Bennet vive com sua família na Inglaterra do século XIX. Quando conhece o reservado Sr. Darcy, os dois desenvolvem uma relação marcada por julgamentos, diferenças sociais e sentimentos inesperados.",
    imagem: require("../assets/orgulhoepreconceito.jpg"),
    url: "https://www.imdb.com/find/?q=Pride%20and%20Prejudice%202005",
  },
  {
    id: "2",
    nome: "10 Coisas que Eu Odeio em Você",
    ano: "1999",
    genero: "Comédia romântica",
    melhor_personagem: "Kat Stratford",
    sinopse:
      "Bianca quer começar a namorar, mas seu pai só permite isso se sua irmã mais velha, Kat, também tiver um relacionamento. Assim, um plano é criado para aproximar Kat de Patrick, um rapaz misterioso da escola.",
    imagem: require("../assets/10coisas.jpg"),
    url: "https://www.imdb.com/find/?q=10%20Things%20I%20Hate%20About%20You",
  },
  {
    id: "3",
    nome: "Little Women",
    ano: "2019",
    genero: "Drama, romance",
    melhor_personagem: "Jo March",
    sinopse:
      "As irmãs March crescem durante a Guerra Civil Americana, enfrentando desafios familiares e pessoais enquanto buscam seus próprios caminhos. Jo sonha em ser escritora e conquistar sua independência.",
    imagem: require("../assets/littlewomen.jpg"),
    url: "https://www.imdb.com/find/?q=Little%20Women%202019",
  },
  {
    id: "4",
    nome: "Como Perder um Homem em 10 Dias",
    ano: "2003",
    genero: "Comédia romântica",
    melhor_personagem: "Andie Anderson",
    sinopse:
      "Andie, uma jornalista, precisa escrever uma matéria sobre como afastar um homem em dez dias. Ao mesmo tempo, Ben aposta que consegue fazer uma mulher se apaixonar por ele no mesmo período, sem que nenhum dos dois conheça o verdadeiro objetivo do outro.",
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
      "A série acompanha a vida de Lorelai Gilmore e sua filha Rory na pequena cidade de Stars Hollow. Entre relacionamentos, estudos, conflitos familiares e amizades, as duas constroem uma relação marcada por companheirismo e independência.",
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
      "A série acompanha médicos do Grey Sloan Memorial Hospital, mostrando os desafios profissionais e pessoais enfrentados por residentes, cirurgiões e outros profissionais da saúde, além de seus relacionamentos e dilemas éticos.",
    imagem: require("../assets/greys.avif"),
    url: "https://www.imdb.com/find/?q=Grey%27s%20Anatomy",
  },
  {
    id: "7",
    nome: "Sociedade dos Poetas Mortos",
    ano: "1989",
    genero: "Drama",
    melhor_personagem: "Neil Perry",
    sinopse:
      "Em um colégio tradicional, um professor de literatura inspira seus alunos a questionar padrões, valorizar a própria individualidade e enxergar a vida de outra maneira. A influência do professor transforma a relação dos estudantes com seus sonhos e expectativas.",
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
      "A série acompanha profissionais de saúde em um pronto-socorro de Pittsburgh, mostrando a pressão dos atendimentos, as decisões difíceis e os desafios humanos e profissionais enfrentados durante seus plantões.",
    imagem: require("../assets/thepitt.jpg"),
    url: "https://www.imdb.com/find/?q=The%20Pitt",
  },
  {
    id: "9",
    nome: "Harry Potter",
    ano: "2001–2011",
    genero: "Fantasia, aventura",
    melhor_personagem: "Hermione Granger",
    sinopse:
      "A história acompanha Harry Potter, um jovem bruxo que descobre seu passado e começa a estudar em Hogwarts. Ao lado de Hermione e Ron, enfrenta desafios, descobre segredos e luta contra forças das trevas.",
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
      "Em um escritório de advocacia de Nova York, Harvey Specter contrata Mike Ross, um jovem brilhante que não possui formação jurídica. A dupla precisa lidar com casos complexos e manter esse segredo enquanto enfrenta disputas profissionais e pessoais.",
    imagem: require("../assets/suits.jpg"),
    url: "https://www.imdb.com/find/?q=Suits",
  },
  {
    id: "11",
    nome: "Before Sunrise",
    ano: "1995",
    genero: "Romance, drama",
    melhor_personagem: "Céline",
    sinopse:
      "Jesse e Céline se conhecem em um trem e decidem passar uma noite caminhando por Viena. Durante esse encontro, conversam sobre a vida, o amor, o futuro e suas experiências, criando uma conexão inesperada.",
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
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.7}
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

        <Text style={styles.filmes}>
          Melhor personagem: {item.melhor_personagem}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Filmes e séries</Text>

      <Text style={styles.subtitulo}>
        Toque em um título para ouvir seu nome e ver os detalhes!
      </Text>

      <FlatList
        data={filmes}
        renderItem={criaItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e6f0e2",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#29472a",
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    color: "#477d43",
    marginBottom: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d4e5ce",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },

  imagem: {
    width: 85,
    height: 115,
    borderRadius: 8,
    backgroundColor: "#c8c8c8",
  },

  textos: {
    flex: 1,
    marginLeft: 14,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#29472a",
    marginBottom: 6,
  },

  ano: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 6,
  },

  filmes: {
    fontSize: 14,
    color: "#333333",
  },
});
