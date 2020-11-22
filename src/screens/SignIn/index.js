import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Image } from "react-native";

import gobackIcon from "../../assets/image/icons/goback.png";

import styles from "./styles";

const SignIn = () => {
  const { navigate, goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handleNavigateToHome() {
    navigate("MainTabs");
  }

  function handleNavigateToSignUp() {
    navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleNavigateBack} style={styles.goback}>
        <Image source={gobackIcon} />
      </RectButton>

      <Image style={styles.logo} />

      <View style={styles.wrapper}>
        <Text style={styles.login}>Login</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#18191F"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#18191F"
            keyboardType="visible-password"
            autoCorrect={false}
          />

          <RectButton
            onPress={handleNavigateToHome}
            style={styles.actionSignIn}
          >
            <Text style={styles.actionText}>Sign In</Text>
          </RectButton>
        </View>
      </View>

      <RectButton style={styles.createCount} onPress={handleNavigateToSignUp}>
        <Text style={styles.createCountText}>
          Começou agora? {""}
          <Text style={styles.createCountTextBlack}>Crie sua conta</Text>
        </Text>
      </RectButton>
    </View>
  );
};

export default SignIn;
