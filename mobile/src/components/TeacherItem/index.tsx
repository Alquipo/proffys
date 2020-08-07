import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars2.githubusercontent.com/u/58523339?s=460&u=5bba39ceab3329cfff6c86b2d3dfdcd5f944c4c0&v=4",
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Alquipo Neto</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        asdgadsgasgasddsfanjdnsaçnjasdghçdsakjgçasjçkagj sajgkiadsjgkadfsg
        gafdkghljkhgfjkadhlgkdjhladfjhkçldfçjkjgfadç
        {"\n"}
        {"\n"}
        fkdsoagçsçdjkghsgjksh
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>Preço/hora {"   "}</Text>
        <Text style={styles.priceValue}>R$ 20,00</Text>

        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default index;
