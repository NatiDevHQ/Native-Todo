import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const styles = createStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Naole</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
    },
    content: {
      fontSize: 52,
    },
  });
  return styles;
};
