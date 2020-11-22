import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./styles";

import uberLogo from "../../assets/image/uber-logo.png";
import googleLogo from "../../assets/image/google-logo.png";
import nubankLogo from "../../assets/image/nubank-logo.png";
import figmaLogo from "../../assets/image/logofigma.png";
import spotifyLogo from "../../assets/image/spotify-logo.png";

const Jobs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.jobsText}>Todas as Vagas</Text>

      <ScrollView
        style={styles.screenContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 6 }}
      >
        <View style={styles.jobsContentUber}>
          <Image source={uberLogo} style={styles.jobsLogo} />
          <Text style={styles.jobTitle}>Product Designer</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>$45/h</Text>
          </View>
        </View>

        <View style={styles.jobsContentGoogle}>
          <Image source={googleLogo} style={styles.jobsLogoGoogle} />
          <Text style={styles.jobTitleGoogle}>UI/UX Designer</Text>
          <View style={styles.priceWhite}>
            <Text style={styles.priceWhiteText}>$45/h</Text>
          </View>
        </View>

        <View style={styles.jobsContentUber}>
          <Image source={nubankLogo} style={styles.jobsLogo} />
          <Text style={styles.jobTitle}>Developer web</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>$45/h</Text>
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
        <View style={styles.jobsWrapper}>
          <Text style={styles.jobsWrapperTitle}>Vagas Populares</Text>
          <View style={styles.jobsContent}>
            <Image source={figmaLogo} />
            <View>
              <Text style={styles.cargeJob}>UX Design Lead</Text>
              <Text style={styles.companyName}>Figma</Text>
            </View>
            <View style={styles.priceWhite}>
              <Text style={styles.priceWhiteText}>$40/h</Text>
            </View>
          </View>
          <View style={styles.jobsContent}>
            <Image source={spotifyLogo} style={styles.logoBackground} />
            <View>
              <Text style={styles.cargeJob}>UX Visual Designer</Text>
              <Text style={styles.companyName}>Spotify</Text>
            </View>
            <View style={styles.priceWhite}>
              <Text style={styles.priceWhiteText}>$40/h</Text>
            </View>
          </View>
          <View style={styles.jobsContent}>
            <Image source={googleLogo} />
            <View>
              <Text style={styles.cargeJob}>UX Design Lead</Text>
              <Text style={styles.companyName}>Google</Text>
            </View>
            <View style={styles.priceWhite}>
              <Text style={styles.priceWhiteText}>$40/h</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Jobs;
