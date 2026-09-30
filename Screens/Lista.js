import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Linking, Alert } from 'react-native';

const albuns = [
    {
      id: 1,
      nome: "Orgulho e preconceito",
      ano: 2005,
      genero: 'romance',
      imagem: require('../assets/guts.png'),
      review: "melhor filme do mundo",
      url: 'https://open.spotify.com/intl-pt/album/1D06fz3cuob62ysTS8k6gu?si=4CmbMLRRQG-na5dfiVSWZghttps://open.spotify.com/intl-pt/album/1D06fz3cuob62ysTS8k6gu?si=4CmbMLRRQG-na5dfiVSWZg',
    },
    {
      id: 3,
      nome: "10 coisas que eu odeio em você",
      ano: 2003,
      genero: 'rom-com',
      imagem: require('../assets/norman.jpg'),
      review: "volte a vida heath ledger",
      url: 'https://open.spotify.com/intl-pt/album/5XpEKORZ4y6OrCZSKsi46A?si=E5YyH4--SC29oFp-rJ5X8Q',
    },
    {
      id: 5,
      nome: "Little women",
      ano: 2019,
      genero: 'Romance',
      imagem: require('../assets/fromthe.jpg'),
      review: "its no use jo we gotta have it out",
      url: 'https://open.spotify.com/intl-pt/album/3xxkjx6Hgl8sWpNfuqhHtD?si=q0B7X8XXRg6lTSR-01zb3g',
    },
    {
      id: 9,
      nome: "Como perder um homem em 10 dias",
      ano: 2024,
      genero: 'rom-com',
      imagem: require('../assets/therise.jpg'),
      review: "YOURE SOOOOOOO VAIN!!!!!",
      url: 'https://open.spotify.com/intl-pt/album/0EiI8ylL0FmWWpgHVTsZjZ?si=nB0KnbAgRCCZayz6atNUhw',
    },
    {
      id: 11,
      nome: "Gilmore Girls",
      ano: 2001,
      genero: 'coming of age, mãe e filha',
      imagem: require('../assets/you.png'),
      review: "lorelai e café",
      url: 'https://open.spotify.com/intl-pt/album/2NSzwyYvQvdOQAoEjrlw9c',
    },
    {
      id: 2,
      nome: "Greys anatomy",
      ano: 1999,
      genero: 'série de médico',
      imagem: require('../assets/bewi.jpg'),
      review: "todo mundo morre",
      url: 'https://open.spotify.com/intl-pt/album/1hmlhl74JfLyUqmqtCwvFb?si=SwR4e1eJRLqWjRIE6oD0UA',
    },
    {
      id: 4,
      nome: "Sociedade dos poetas mortos",
      ano: 1990,
      genero: 'Drama',
      imagem: require('../assets/ego.jpg'),
      review: "tristeza",
      url: 'https://open.spotify.com/intl-pt/album/3MROTtttK946gHaTkXeP8b?si=sbJ67OELTUCmES4qIm_FnQ',
    },
    {
      id: 6,
      nome: "The pitt",
      ano: 2024,
      genero: 'série de médico',
      imagem: require('../assets/email.jpg'),
      review: "te amo samira mohaan e frank langdon",
      url: 'https://open.spotify.com/intl-pt/album/2g4aJTa5ejGpp0O0GKzWAQ?si=5E2FClFgSLy8cnUghjDUiw',
    },
    {
      id: 7,
      nome: "Harry Potter",
      ano: 2000,
      genero: 'fantasia',
      imagem: require('../assets/love.jpg'),
      review: "coitado do harry",
      url: 'https://open.spotify.com/intl-pt/album/6rLBGig7awR8nRMt0suKbv?si=hGaGfywQQM-qRX9z87Jejw',
    },
    {
      id: 8,
      nome: "SUITS",
      ano: 2010,
      genero: 'série de advogado',
      imagem: require('../assets/lost.jpg'),
      review: "te amo donna",
      url: 'https://open.spotify.com/intl-pt/track/1GMPPheF4aMHMifOgp72eF?si=6f8c17cd888741e7',
    },
    {
      id: 10,
      nome: "Before Sunrise",
      ano: 1995,
      genero: 'romance',
      imagem: require('../assets/jagged.png'),
      review: "amo muito",
      url: 'https://open.spotify.com/intl-pt/album/5Ap3F8CxjjsQKZGASDcHNA?si=kR5fL2z6QeyplSqvTSLqyQ',
    },
];

export default function Lista({navigation}){
    const criaItem =({item}) => (
        <TouchableOpacity
            style = {styles.listaItem}
            onPress = {() => 
            navigation.navigate('DetalhesAlbum',
                {albuns: item }
             )}
          >
        <Image source={item.imagem}
        style={styles.listaImagem}
        />
        <View style={styles.listaDetalhes}>
        <Text style={styles.textoForte}>Cód: <Text style={styles.textoNormal}>{item.id}</Text></Text>
       <Text style={styles.textoForte}>Nome: <Text style={styles.textoNormal}>{item.nome}</Text></Text>
       <Text style={styles.textoForte}>Ano: <Text style={styles.textoNormal}>{item.ano}</Text></Text>
       <Text style={styles.textoForte}>Gênero: <Text style={styles.textoNormal}>{item.genero}</Text></Text>
      </View>
        </TouchableOpacity>
    )
    return (
         <View style={styles.listaContainer}>


      <FlatList
        data={albuns}
        renderItem={criaItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.conteudoFlatList}

      />

    </View>
    )
}

const styles = StyleSheet.create({


  listaContainer: {

    flex: 1,
    justifyContent: 'center'

  },


  conteudoFlatList: {

    paddingHorizontal: 15,

    alignItems: 'center',
    flexGrow: 0

  },


  listaItem: {

    backgroundColor: '#d8e4ed',

    marginRight: 15,

    padding: 15,

    borderRadius: 15,

    width: 240,

    height: 360,

    flexDirection: 'column',

    alignItems: 'center',

    elevation: 3

  },


  listaImagem: {

    width: 220,

    height: 220,

    borderRadius: 8,

    marginBottom: 15

  },


  listaDetalhes: {

    width: '100%',

    alignItems: 'flex-start'

  },


  textoForte: {

    fontWeight: 'bold',

    fontSize: 14,

    color: '#222',

    marginBottom: 2

  },


  textoNormal: {

    fontWeight: 'normal',

    color: '#444'

  }


});