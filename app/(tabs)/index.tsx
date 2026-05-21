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
        source={{
          uri: "https://i.pinimg.com/1200x/5e/84/9a/5e849adab971e3d40d0dcea8c738d295.jpg"}}
          style={{ width: 50, height: 50 }}
      />
    </View>
  );
}
