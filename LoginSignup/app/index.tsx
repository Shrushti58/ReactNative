import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  
  const goToSignup = () => {
    router.navigate("/signup");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/login.avif")}
        style={{
          width: "100%",
          height: 400,
        }}
        resizeMode="cover"
      />

      <View
        style={{
          padding: 20,
          gap: 20,
        }}
      >
        <TextInput
          placeholder="Enter Your Email"
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            height: 40,
            paddingHorizontal: 20,
            borderRadius: 10,
            color: "#000",
          }}
        />
        <TextInput
          placeholder="Enter Your Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={{
            borderWidth: 1,
            height: 40,
            paddingHorizontal: 20,
            borderRadius: 10,
            color: "#000",
          }}
        />

        <MyButton title="Login" />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={goToSignup}>
            <Text style={{ color: "#007AFF", fontSize: 14 }}>
              Don’t have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
