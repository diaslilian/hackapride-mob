import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    overflow: "hidden",
  },

  singupText: {
    top: 30,
    fontWeight: "800",
    fontSize: 36,
  },

  wrapper: {
    alignItems: "center",
    padding: 24,
    width: 327,
    height: 356,
    top: 16,
  },

  input: {
    borderWidth: 2,
    borderColor: "#BDBDBD",
    fontSize: 16,
    marginTop: 24,
    borderRadius: 16,
    paddingHorizontal: 40,
    width: 279,
    height: 50,
    justifyContent: "center",
  },

  actionSignUp: {
    backgroundColor: "#D0CFD0",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,

    width: 279,
    height: 50,

    borderColor: "#18191F",
    borderWidth: 2,
  },

  actionText: {
    color: "#18191F",
    fontSize: 21,
    fontWeight: "bold",
  },

  createCount: {
    flex: 1,
    paddingBottom: 80,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  createCountTextBlack: {
    color: "#000000",
    fontWeight: "bold",
  },
});
