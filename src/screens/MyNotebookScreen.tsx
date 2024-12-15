import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import i18n from "../../i18n";

const MyNotebooksScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t("my_notebooks_title")}</Text>
      <Text style={styles.subtitle}>{i18n.t("my_notebooks_message")}</Text>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => alert(i18n.t("fab_create_notebook"))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  subtitle: { fontSize: 18, textAlign: "center", marginBottom: 20 },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MyNotebooksScreen;
