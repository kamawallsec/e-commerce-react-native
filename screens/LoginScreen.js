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
import React, { useEffect, useState } from "react";
import shoppingBasket from "../images/shopping-basket.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Main");
        }
      } catch (error) {
        console.log("Login status error: ", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLoginNavigation = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    console.log("Request Payload:", user, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });

    // Sending a post request to the backend

    axios
      .post("http://10.0.2.2:8000/login", user, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log("Login post request response: ", res);
        console.log("Login post request response: ", res.data);

        const token = res.data.token;

        AsyncStorage.setItem("authToken", token);
        navigation.navigate("Main");
      })
      .catch((error) => {
        Alert.alert("Login failed", "Invalid Email!");
        console.log("Login post request error: ", error);
        console.error("Login post request error: ", error.message);
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
            Login to your account
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
          onPress={handleLogin}
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
            Login
          </Text>
        </Pressable>

        <Pressable style={{ marginTop: 20 }} onPress={handleLoginNavigation}>
          <Text style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Text style={{ color: "#3498DB" }}>Sign up</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
