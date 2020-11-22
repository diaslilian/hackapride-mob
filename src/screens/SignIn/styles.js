import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    overflow: "hidden",
  },

  goback: {
    top: 10,
    right: "40%",
  },

  logo: {
    width: 140,
    height: 140,
    top: 40,
    backgroundColor: "#C4C4C4",

    marginBottom: 20,
  },

  wrapper: {
    alignItems: "center",
    padding: 24,
    width: 327,
    height: 356,
    top: 16,
  },

  login: {
    fontWeight: "800",
    fontSize: 36,
    lineHeight: 40,
    color: "#000000",
  },

  input: {
    borderWidth: 2,
    borderColor: "#18191F",
    fontSize: 16,
    marginTop: 24,
    borderRadius: 16,
    paddingHorizontal: 40,
    width: 279,
    height: 50,
    justifyContent: "center",
    fontFamily: "Montserrat_400Regular",
  },

  actionSignIn: {
    backgroundColor: "#18191F",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,

    width: 279,
    height: 50,
  },

  actionText: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Montserrat_700Bold",
  },

  createCount: {
    flex: 1,
    paddingBottom: 60,
    justifyContent: "flex-end",
  },

  createCountTextBlack: {
    color: "#000000",
    fontWeight: "bold",
  },
});
