import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    paddingTop: 30,
    backgroundColor: "#C4C4C4",
    overflow: "hidden",
  },

  logo: {
    flex: 1,
    width: 140,
    height: 140,
    top: 40,
    backgroundColor: "#ffffff",
  },

  login: {
    fontWeight: "800",
    fontSize: 36,
    lineHeight: 40,
    color: "#000000",
  },

  textLogin: {
    color: "#474A57",
    paddingTop: 16,
    paddingBottom: 16,

    fontWeight: "500",
    fontSize: 17,
    lineHeight: 24,
  },

  wrapper: {
    alignItems: "center",
    padding: 24,

    width: 327,
    height: 356,
    top: 90,

    backgroundColor: "#FFFFFF",
    borderColor: "#18191F",
    borderWidth: 2,
    borderRadius: 16,
  },

  btnAction: {
    justifyContent: "center",
    alignItems: "center",
    width: 279,
    height: 60,
    paddingTop: 100,
  },

  actionEmail: {
    backgroundColor: "#18191F",
    borderRadius: 16,
    height: 50,
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  actionFacebook: {
    backgroundColor: "#C4C4C4",
    borderRadius: 16,
    height: 50,
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  actionLinkedin: {
    backgroundColor: "#666868",
    borderRadius: 16,
    height: 50,
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  actionText: {
    color: "#FFF",
    fontSize: 21,
    fontWeight: "bold",
  },

  createCount: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: "flex-end",
  },

  createCountTextBlack: {
    color: "#000000",
    fontWeight: "bold",
  },
});
