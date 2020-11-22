import React from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import avatarIcon from "../../assets/image/avatar.png";
import interFlagIcon from "../../assets/image/icons/intersexFlag_icon.png";
import locationIcon from "../../assets/image/icons/location.png";
import linkedinIcon from "../../assets/image/icons/linkedIn.png";
import facebookIcon from "../../assets/image/icons/facebook.png";
import shareIcon from "../../assets/image/icons/share.png";
import notificationIcon from "../../assets/image/icons/notification.png";
import editIcon from "../../assets/image/icons/edit.png";
import uberLogo from "../../assets/image/uber-logo.png";
import nubankLogo from "../../assets/image/nubank-logo.png";
import googleLogo from "../../assets/image/google-logo.png";

import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={avatarIcon} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Bem vinde</Text>
          <View style={styles.profileInfo}>
            <Text style={styles.profileInfoName}>Liz</Text>
            <Image source={interFlagIcon} />
          </View>

          <View style={styles.locationInfo}>
            <Image source={locationIcon} />
            <Text style={styles.locationInfoText}>Petrolina-PE</Text>
          </View>
        </View>

        <View style={styles.groupIcon}>
          <Image source={linkedinIcon} style={styles.linkIcon} />
          <Image source={facebookIcon} style={styles.faceIcon} />
          <Image source={shareIcon} />
          <Image source={notificationIcon} style={styles.notifIcon} />
        </View>
      </View>
      <Image source={editIcon} style={styles.editIcon} />

      <View style={styles.searchContent}>
        <Ionicons
          name="ios-search"
          size={20}
          color="#B2A8C7"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Pesquisa"
          placeholderTextColor="#D2D2D2"
          underlineColorAndroid="transparent"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionContainerText}>Se qualifique</Text>

          <ScrollView
            style={styles.screenContent}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 6 }}
          >
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Todos os Cursos</Text>
            </View>
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Cursos em Andamento</Text>
            </View>
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Todos os Cursos</Text>
            </View>
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Cursos Recomendados</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionContainerText}>Oportunidades</Text>

          <ScrollView
            style={styles.screenContent}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 6 }}
          >
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Todas as Vagas</Text>
            </View>
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Vagas Recomendados</Text>
            </View>
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Seleções em Andamento</Text>
            </View>
            <View style={styles.screenOption}>
              <Text style={styles.screenOptionText}>Todas as Vagas</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.companyContainer}>
          <View style={styles.linecontent}></View>
          <Text style={styles.companyText}>Empresas Parceiras</Text>

          <View style={styles.groupCompany}>
            <Image source={uberLogo} style={styles.uberLogo} />
            <Image source={nubankLogo} />
            <Image source={googleLogo} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
