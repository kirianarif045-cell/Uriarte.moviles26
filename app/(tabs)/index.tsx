import { Button, Image, Text, TextInput, View } from "react-native";

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
      <Text
        style={{
          color: "white",
          fontSize: 50,
          fontStyle: "italic",
        }}
      >
        ¡Bienvenido a nuestra pagina!
      </Text>

      <Text style={{ fontSize: 18 }}>
        Descripcion provisional improvisada
      </Text>
      
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      
      >
        <Image
          source={{
            uri: "https://media1.tenor.com/m/wBzXX1bly3sAAAAd/subaru-natsuki-subaru.gif",
          }}
          style={{ width: 300, height: 300,margin:10 }}
        />
        <Image
          source={{
            uri: "https://media1.tenor.com/m/85WyIWYK_tQAAAAd/re-zero-natsuki-subaru.gif  ",
          }}
          style={{ width: 300, height: 300,margin:10 }}
        />
      </View>

      <TextInput
      placeholder="Escribe aqui"
      style={{borderWidth: 1, padding: 8,backgroundColor:"white",marginBottom: 10}} 
      />

      <Button
        title= "presionar"
        onPress={()=>alert("Boton presionado")}
        color="purple"
      />
      
    </View>
  );
 
}