import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#D2D2D2",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  jobsText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 28,
  },

  screenContent: {
    flexDirection: "row",
  },

  jobsContentUber: {
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
    backgroundColor: "#5B5959",
    width: 210,
    height: 210,
    borderRadius: 26,
    top: 6,
    marginRight: 20,
  },

  jobsContentGoogle: {
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF",
    width: 210,
    height: 210,
    borderRadius: 26,
    top: 6,
    marginRight: 20,
  },

  jobTitleGoogle: {
    color: "#0A0909",
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },

  jobTitle: {
    color: "#FFFFFF",
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },

  price: {
    alignItems: "center",
    backgroundColor: "#8D8C8C",
    width: 41,
    height: 21,
    borderRadius: 6,
  },

  priceText: {
    fontFamily: "Poppins_400Regular",
    color: "#FFFFFF",
  },

  jobsWrapper: {
    top: 50,
  },

  jobsWrapperTitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },

  jobsContent: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    width: 320,
    height: 80,
    borderRadius: 24,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },

  logoBackground: {
    backgroundColor: "#5B5959",
    borderRadius: 50,
  },

  cargeJob: {
    fontFamily: "Poppins_500Medium",
    color: "#0A0909",
    fontSize: 15,
  },

  companyName: {
    fontFamily: "Poppins_500Medium",
    fontSize: 13,
    color: "#8D8C8C",
  },

  priceWhite: {
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    width: 41,
    height: 21,
    borderRadius: 6,
  },

  priceWhiteText: {
    fontFamily: "Poppins_400Regular",
    color: "#0A0909",
  },
});
