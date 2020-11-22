import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#C4C4C4",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  wrapper: {
    flexDirection: "row",
  },

  welcomeText: {
    color: "#5B5959",
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },

  content: {
    top: 14,
    paddingHorizontal: 10,
  },

  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  profileInfoName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    marginRight: 4,
  },

  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationInfoText: {
    color: "#5B5959",
    marginLeft: 3,
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },

  groupIcon: {
    flexDirection: "row",
    top: 20,
    marginHorizontal: 10,
  },

  linkIcon: {
    marginRight: 10,
  },

  faceIcon: {
    marginRight: 10,
  },

  notifIcon: {
    marginLeft: 10,
    bottom: 20,
  },

  editIcon: {
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginEnd: 32,
  },

  searchContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    top: 14,
  },

  searchIcon: {
    padding: 10,
    paddingHorizontal: 10,
  },

  input: {
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    borderRadius: 50,
    paddingHorizontal: 10,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat_400Regular",
    flex: 1,
    paddingRight: 200,
  },

  sectionContainer: {
    top: 39,
  },

  sectionContainerText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_400Regular",
    fontSize: 26,
  },

  screenContent: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 32,
  },

  screenOption: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    height: 130,
    width: 130,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },

  screenOptionText: {
    fontFamily: "Montserrat_400Regular",
    top: "20%",
    textAlign: "center",
  },

  companyContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    top: 30,
    height: 160,
    // width: 400,
    alignContent: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  linecontent: {
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#D0CBDB",
    borderWidth: 2,
    borderRadius: 6,
    width: 37,
    bottom: 46,
  },

  companyText: {
    alignSelf: "center",
    justifyContent: "center",
    bottom: 30,
  },

  groupCompany: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  uberLogo: {
    backgroundColor: "#C4C4C4",
    borderRadius: 6,
  },
});
