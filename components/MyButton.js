import React from "react";
import { TouchableOpacity, Text, Button } from "react-native-web";

export default function MyButton({ title, onPress, ...rest }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#0096FF",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
      onPress={onPress}
      rest
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
}
