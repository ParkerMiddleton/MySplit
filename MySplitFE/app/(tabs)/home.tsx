import { Text, View, StyleSheet } from "react-native";
import { LogoBanner } from "@/components/logo-banner";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LogoBanner />

      <View style={styles.centerContent}>
        <Text style={styles.text}>Home Page</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});
