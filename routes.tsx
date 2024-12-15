import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MyNotebooksScreen from "./src/screens/MyNotebookScreen";
import i18n from "./i18n";

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyNotebooks"
          component={MyNotebooksScreen}
          options={{ headerTitle: i18n.t("my_notebooks_title") }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
