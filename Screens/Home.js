import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

export default function Home({navigation}){
    return(
        <View style = {styles.container}>
            <Text style={styles.titulo}>
                Catálogo de filmes
            </Text>
            <Text style = {styles.texto}>
                Filmes disponíveis
            </Text>
            <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Lista')}
            >
                <Text style = {styles.textoBotao}>
                    Ver filmes
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    padding: 20,

    backgroundColor: '#f5f5f5'

  },


  titulo: {

    fontSize: 30,

    fontWeight: 'bold',

    marginBottom: 15

  },


  texto: {

    fontSize: 16,

    textAlign: 'center',

    marginBottom: 30

  },


  botao: {

    backgroundColor: '#673ab7',

    paddingHorizontal: 30,

    paddingVertical: 15,

    borderRadius: 10

  },


  textoBotao: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold'

  }

});