import React from "react";
import { TouchableHighlight, Text, Button } from "react-native-web";

export default function MyButton({ title, onPress, ...rest }) {
  //   return (
  //     <TouchableHighlight
  //       style={{
  //         backgroundColor: "blue",
  //         borderRadius: "10%",
  //         width: "90%",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         padding: 15,
  //       }}
  //       onPress={onPress}
  //       rest
  //     >
  //       <Text style={{ color: "white" }}>{title}</Text>
  //     </TouchableHighlight>
  //   );
  return <Button title={title} onPress={onPress}></Button>;
}
