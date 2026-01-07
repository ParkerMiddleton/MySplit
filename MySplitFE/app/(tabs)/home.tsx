import { Text, View, StyleSheet } from "react-native";
import { LogoBanner } from "@/components/logo-banner";
import { CalanderView } from "@/components/calander-view";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LogoBanner />
      <CalanderView />
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
