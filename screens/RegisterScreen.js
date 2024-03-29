import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import shoppingBasket from "../images/shopping-basket.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleRegisterNavigation = () => {
    navigation.navigate("Login");
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    console.log("Request Payload:", user);

    // Sending a post request to the backend

    axios
      .post("http://10.0.2.2:8000/register", user, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log("Register post request response: ", res);
        console.log("Register post request response: ", res.data);

        if (
          res.data.message ===
            "Registration successful. Please check your email for verification." ||
          res.data.message === "Email already exists!"
        ) {
          Alert.alert(
            "Registration successful",
            "You have successfully registered!"
          );
          setName("");
          setEmail("");
          setPassword("");
        } else {
          Alert.alert(
            "Registration failed",
            "Error occurred while registering!"
          );
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          Alert.alert("Registration failed", error.response.data.message);
        } else {
          Alert.alert(
            "Registration failed",
            "Error occurred while registering!"
          );
        }
        console.log("Registration failed", error);
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FBFCFC", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 120, height: 120, margin: 20 }}
          source={shoppingBasket}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 10,
              color: "#1C2833",
            }}
          >
            Register your account
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              paddingVertical: 5,
              paddingLeft: 10,
              paddingHorizontal: 30,
              borderRadius: 5,
              marginTop: 10,
              backgroundColor: "#ECF0F1",
            }}
          >
            <Feather name="user" size={24} color="black" />
            <TextInput
              placeholder="Enter your name"
              style={{ width: 250, fontSize: name ? 15 : 15 }}
              value={name}
              onChangeText={handleNameChange}
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              paddingVertical: 5,
              paddingLeft: 10,
              paddingHorizontal: 30,
              borderRadius: 5,
              marginTop: 10,
              backgroundColor: "#ECF0F1",
            }}
          >
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Enter your email"
              style={{ width: 250, fontSize: email ? 15 : 15 }}
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              paddingVertical: 5,
              paddingLeft: 10,
              paddingHorizontal: 30,
              borderRadius: 5,
              marginTop: 10,
              backgroundColor: "#ECF0F1",
            }}
          >
            <MaterialCommunityIcons
              name="account-lock-outline"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="Enter your password"
              style={{ width: 250, fontSize: password ? 15 : 15 }}
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#3498DB" }}>Forgot password?</Text>
        </View>

        <View style={{ marginTop: 50 }} />

        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "#3498DB",
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable style={{ marginTop: 20 }} onPress={handleRegisterNavigation}>
          <Text style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Text style={{ color: "#3498DB" }}>Sign in</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
