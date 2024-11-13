import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SignUp({ navigation }) {
  const [selectedGender, setSelectedGender] = useState("male");
  const [selectedInterest, setSelectedInterest] = useState("unisex");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.signupContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require("../assets/logo-image.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.signupHeader}>
          <Text style={styles.signupHeaderText}>Sign Up</Text>
          <Text style={styles.signupHeaderTextSubtitle}>
            Please complete your registration here as a new user
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Username or Brand Name"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          autoCorrect={false}
        />
        <View style={styles.inlineInputContainer}>
          <Picker
            selectedValue={selectedGender}
            style={styles.inlineInput}
            onValueChange={(itemValue) => setSelectedGender(itemValue)}
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
          <Picker
            selectedValue={selectedInterest}
            style={styles.inlineInput}
            onValueChange={(interestValue) =>
              setSelectedInterest(interestValue)
            }
          >
            <Picker.Item label="Men wears" value="men" />
            <Picker.Item label="Female wears" value="female" />
            <Picker.Item label="Unisex" value="unisex" />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.signupButton,
              { backgroundColor: pressed ? "#0055cc" : "blue" },
            ]}
            onPress={() => console.log("Login button Pressed")}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </Pressable>
          <Text style={styles.textBelow}>
            If you have an account,{" "}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Login")}
            >
              Login Here
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
    paddingVertical: 20,
    backgroundColor: "plum",
  },
  signupContainer: {
    alignItems: "center",
    width: "100%",
  },
  logoContainer: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  signupHeader: {
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  signupHeaderText: {
    fontSize: 50,
    fontWeight: "bold",
    margin: 4,
  },
  signupHeaderTextSubtitle: {
    fontSize: 18,
    color: "darkblue",
    maxWidth: "60%",
    textAlign: "center",
  },
  input: {
    height: 45,
    margin: 5,
    width: "80%",
    borderColor: "transparent",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    color: "#000",
  },
  inlineInputContainer: {
    flexDirection: "row",
    width: "83%",
    margin: 0,
    justifyContent: "space-between",
  },
  inlineInput: {
    flex: 1,
    height: 45,
    margin: 5,
    borderColor: "transparent",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    color: "#000",
    fontWeight: "bold",
  },
  textBelow: {
    fontSize: 15,
    color: "darkblue",
    textAlign: "center",
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  signupButton: {
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
