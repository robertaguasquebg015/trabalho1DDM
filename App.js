import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Screens/Home";

import Lista from "./Screens/Lista";
import DetalhesAlbum from "./Screens/DetalhesAlbum";

import StackArtistas from "./Screens/StackArtistas";

import StackFilmes from "./Screens/StackFilmes";

import Informacoes from "./Screens/Informacoes";

import SobreOTema from "./Screens/SobreOTema";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f5f599",
          },
          headerTintColor: "#6aaff0",
          drawerActiveTintColor: "#f8a0c9",
          drawerInactiveTintColor: "#6cb665",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "Início",
            drawerLabel: "Início",
          }}
        />

        <Drawer.Screen
          name="Lista"
          component={Lista}
          options={{
            title: "Listagem de álbuns",
            drawerLabel: "Álbuns",
          }}
        />

        <Drawer.Screen
          name="DetalhesAlbum"
          component={DetalhesAlbum}
          options={{
            title: "Detalhes do álbum",
            drawerItemStyle: {
              display: "none",
            },
          }}
        />

        <Drawer.Screen
          name="Artistas"
          component={StackArtistas}
          options={{
            title: "Artistas",
            drawerLabel: "Artistas",
          }}
        />

        <Drawer.Screen
          name="Filmes"
          component={StackFilmes}
          options={{
            title: "Filmes e séries",
            drawerLabel: "Filmes e séries",
          }}
        />

        <Drawer.Screen
          name="Informacoes"
          component={Informacoes}
          options={{
            title: "Informações",
            drawerLabel: "Informações",
          }}
        />

        <Drawer.Screen
          name="SobreOTema"
          component={SobreOTema}
          options={{
            title: "Sobre o tema",
            drawerLabel: "Sobre o tema",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}