import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppRoutes from "./routes";

export default function App() {
  return (
    <PaperProvider>
      <AppRoutes />
    </PaperProvider>
  );
}
