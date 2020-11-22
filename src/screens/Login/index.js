import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const Login = ({ navigation }) => {
  function handleSignIn() {
    navigation.navigate("SignIn");
  }

  function handleSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} />

      <View style={styles.wrapper}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.textLogin}>Faça seu Login</Text>

        <View style={styles.btnAction}>
          <TouchableOpacity style={styles.actionEmail} onPress={handleSignIn}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionFacebook}>
            <Text style={styles.actionText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionLinkedin}>
            <Text style={styles.actionText}>Linkedin</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.createCount} onPress={handleSignUp}>
        <Text style={styles.createCountText}>
          Começou agora? {""}
          <Text style={styles.createCountTextBlack}>Crie sua conta</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
