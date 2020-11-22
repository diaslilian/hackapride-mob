import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

import uberLogo from "../../assets/image/uber-logo.png";
import googleLogo from "../../assets/image/google-logo.png";
import nubankLogo from "../../assets/image/nubank-logo.png";
import figmaLogo from "../../assets/image/logofigma.png";
import spotifyLogo from "../../assets/image/spotify-logo.png";

const Courses = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.coursesText}>Todos os Cursos</Text>

      <ScrollView
        style={styles.screenContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 6 }}
      >
        <View style={styles.coursesContentUber}>
          <Image source={uberLogo} style={styles.coursesLogo} />
          <Text style={styles.courseTitle}>Inteligência Comercial</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>20h</Text>
          </View>
        </View>

        <View style={styles.coursesContentGoogle}>
          <Image source={googleLogo} style={styles.coursesLogoGoogle} />
          <Text style={styles.courseTitleGoogle}>Técnicas de Venda</Text>
          <View style={styles.priceWhite}>
            <Text style={styles.priceWhiteText}>30h</Text>
          </View>
        </View>

        <View style={styles.coursesContentUber}>
          <Image source={nubankLogo} style={styles.coursesLogo} />
          <Text style={styles.courseTitle}>Developer web</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>12h</Text>
          </View>
        </View>
      </ScrollView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <View style={styles.coursesWrapper}>
          <Text style={styles.coursesWrapperTitle}>Cursos Populares</Text>
          <View style={styles.coursesContent}>
            <Image source={figmaLogo} />
            <View>
              <Text style={styles.cargecourse}>Inglês básico</Text>
              <Text style={styles.companyName}>Figma</Text>
            </View>
            <View style={styles.priceWhite}>
              <Text style={styles.priceWhiteText}>40h</Text>
            </View>
          </View>
          <View style={styles.coursesContent}>
            <Image source={spotifyLogo} style={styles.logoBackground} />
            <View>
              <Text style={styles.cargecourse}>Vendas em Varejo</Text>
              <Text style={styles.companyName}>Jequiti</Text>
            </View>
            <View style={styles.priceWhite}>
              <Text style={styles.priceWhiteText}>30h</Text>
            </View>
          </View>
          <View style={styles.coursesContent}>
            <Image source={googleLogo} />
            <View>
              <Text style={styles.cargecourse}>UI/UX Designer</Text>
              <Text style={styles.companyName}>Google</Text>
            </View>
            <View style={styles.priceWhite}>
              <Text style={styles.priceWhiteText}>40h</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Courses;
