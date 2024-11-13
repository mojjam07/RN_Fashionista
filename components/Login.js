import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.loginContainer}>
        <View style={styles.loginHeader}>
          <Text style={styles.headerText}>Welcome!</Text>
          <Text style={styles.headerSubtitleText}>
            To continue using this app.
          </Text>
          <Text style={styles.headerSubtitleText}>Please Log in ☺️.</Text>
        </View>

        <Image
          style={styles.welcomeImage}
          source={require("../assets/welcome-image.png")}
          resizeMode="contain"
        />

        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />

        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.loginButton,
              { backgroundColor: pressed ? "#0055cc" : "blue" },
            ]}
            onPress={() => console.log("Login button Pressed")}
          >
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </Pressable>
          <Text style={styles.textBelow}>
            If you don't have an account,{" "}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up Here
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  loginContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  loginHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#111",
  },
  headerSubtitleText: {
    fontSize: 20,
    color: "darkblue",
  },
  welcomeImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  input: {
    height: 50,
    margin: 5,
    width: "100%",
    borderColor: "transparent",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    margin: 5,
  },
  loginButton: {
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  textBelow: {
    fontSize: 15,
    color: "darkblue",
    alignSelf: "center",
    margin: 5,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
