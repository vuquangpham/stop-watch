import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const colors = {
  grey: "#495057",
  green: "#b2f2bb",
  red: "#ffa8a8",
};

export default function Button(props) {
  const text = props.text;
  let borderStyle = styles.borderGrey,
    bgStyle = styles.bgGrey,
    textStyle = styles.txtGrey;

  switch (props.style) {
    case "green": {
      borderStyle = styles.borderGreen;
      bgStyle = styles.bgGreen;
      textStyle = styles.txtGreen;

      break;
    }
    case "red": {
      borderStyle = styles.borderRed;
      bgStyle = styles.bgRed;
      textStyle = styles.txtRed;

      break;
    }
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, borderStyle]}
    >
      <View style={[styles.inner, bgStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: "50%",
    overflow: "hidden",

    borderWidth: 2,

    width: 75,
    height: 75,
  },
  inner: {
    flex: 1,
    borderRadius: "50%",

    justifyContent: "center",
    alignItems: "center",
    margin: 2,

    padding: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },

  borderGrey: {
    borderColor: colors.grey,
  },
  bgGrey: {
    backgroundColor: colors.grey,
  },
  txtGrey: {
    color: "#fff",
  },

  borderGreen: {
    borderColor: colors.green,
  },
  bgGreen: {
    backgroundColor: colors.green,
  },
  txtGreen: {
    color: "#2b8a3e",
  },

  borderRed: {
    borderColor: colors.red,
  },
  bgRed: {
    backgroundColor: colors.red,
  },
  txtRed: {
    color: "#c92a2a",
  },
});
