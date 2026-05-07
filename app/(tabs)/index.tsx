import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <Text style={{ color: "white", fontSize: 50, fontStyle: "italic" }}>
        ¡Hola mundo React Native!
      </Text>
    </View>
  );
}
