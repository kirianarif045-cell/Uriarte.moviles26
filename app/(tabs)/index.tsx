import { Image, Text, View } from "react-native";

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
        ¡Hola mundo React Nativexd!
      </Text>
      <Text style={{ fontSize: 18 }}>esto es un super texto creado por mi</Text>
      <Image 
        source={require("")}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}
