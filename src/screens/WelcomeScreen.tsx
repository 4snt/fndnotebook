import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import i18n from "../../i18n";

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const changeLanguage = (lang: string) => {
    i18n.locale = lang;
    navigation.navigate("MyNotebooks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("welcome_title")}</Text>
      <Text style={styles.subtitle}>{i18n.t("welcome_message")}</Text>
      <Button title="English" onPress={() => changeLanguage("en")} />
      <Button title="Português" onPress={() => changeLanguage("pt")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  subtitle: { fontSize: 18, textAlign: "center", marginBottom: 20 },
});

export default WelcomeScreen;
