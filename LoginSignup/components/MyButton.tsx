import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const MyButton = ({title}) => {
  return (
    <View style={{
    }}>
      <TouchableOpacity activeOpacity={0.8} style={styles.button} >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
