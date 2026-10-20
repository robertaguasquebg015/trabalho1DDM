
import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Screens/Home";
import Lista from "./Screens/Lista";
import Filmes from "./Screens/Filmes";
import Informacoes from "./Screens/Informacoes";
import SobreOTema from "./Screens/SobreOTema";
import DetalhesFilmes from "./Screens/DetalhesFilmes";
import DetalhesPersonagens from "./Screens/DetalhesPersonagens";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#d8e4ed",
          },
          headerTintColor: "#263746",
          drawerActiveTintColor: "#245b91",
          drawerLabelStyle: {
            fontSize: 15,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: "Início" }}
        />

        <Drawer.Screen
          name="Lista"
          component={Lista}
          options={{ title: "Lista de filmes" }}
        />

        <Drawer.Screen
          name="Filmes"
          component={Filmes}
          options={{ title: "Filmes" }}
        />

        <Drawer.Screen
          name="DetalhesFilmes"
          component={DetalhesFilmes}
          options={{
            title: "Detalhes do filme",
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="DetalhesPersonagens"
          component={DetalhesPersonagens}
          options={{
            title: "Detalhes dos personagens",
            drawerItemStyle: { display: "none" },
          }}
        />

        <Drawer.Screen
          name="Informacoes"
          component={Informacoes}
          options={{ title: "Informações" }}
        />

        <Drawer.Screen
          name="SobreOTema"
          component={SobreOTema}
          options={{ title: "Sobre o tema" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
