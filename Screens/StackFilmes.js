import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Filmes from "./Filmes";
import DetalhesFilmes from "./DetalhesFilmes";

const Stack = createNativeStackNavigator();

export default function StackFilmes() {
  return (

    <Stack.Navigator>

      <Stack.Screen
        name="Filmes"
        component={Filmes}
        options={{
          title: "Filmes"
        }}
      />

      <Stack.Screen
        name="DetalhesFilmes"
        component={DetalhesFilmes}
        options={{
          title: "Detalhes dos Filmes"
        }}
      />

    </Stack.Navigator>

  );
}