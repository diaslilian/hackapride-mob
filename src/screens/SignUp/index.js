import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { View, Text, Image, TextInput } from "react-native";

import styles from "./styles";

import gobackIcon from "../../assets/image/icons/goback.png";

const SignUp = () => {
  const { navigate, goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function handleNavigateToHome() {
    navigate("MainTabs");
  }

  function handleNavigateToLogin() {
    navigate("Login");
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleNavigateBack}>
        <Image source={gobackIcon} style={styles.goback} />
      </RectButton>

      <Text style={styles.singupText}>Cadastre-se</Text>

      <View style={styles.wrapper}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Como te chamo?"
            placeholderTextColor="#18191F"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#18191F"
            keyboardType="email-address"
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
            style={styles.actionSignUp}
          >
            <Text style={styles.actionText}>Sign Up</Text>
          </RectButton>
        </View>
      </View>

      <RectButton onPress={handleNavigateToLogin} style={styles.createCount}>
        <Text style={styles.createCountText}>
          Já tem uma conta? {""}
          <Text style={styles.createCountTextBlack}>Clique aqui</Text>
        </Text>
      </RectButton>
    </View>
  );
};

export default SignUp;
