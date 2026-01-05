import { View, Image, StyleSheet } from "react-native";

/**
 * Logo to sit at the top on each screen
 */
export function LogoBanner() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/images/mysplit-logo.png")}
				style={styles.logo}
				resizeMode="contain"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 80,
		backgroundColor: "#1F8F3A", // your primary green
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: 50,
		width: 200,
	},
});
