import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";

const HomeScreen = () => {
  const list = [
    {
      id: 0,
      image: require("../images/home.png"),
      name: "Home",
    },

    {
      id: 1,
      image: require("../images/deals.png"),
      name: "Deals",
    },

    {
      id: 2,
      image: require("../images/electronics.png"),
      name: "Electronics",
    },

    {
      id: 3,
      image: require("../images/mobiles.png"),
      name: "Mobiles",
    },

    {
      id: 4,
      image: require("../images/music.png"),
      name: "Music",
    },

    {
      id: 5,
      image: require("../images/fashion.png"),
      name: "Fashion",
    },
  ];

  const images = [
    "https://blog.placeit.net/wp-content/uploads/2021/11/ad-banner-maker-announcing-discounts-for-black-friday.png",
    "https://m-cdn.phonearena.com/images/article/139475-wide-two_1200/Best-Prime-Day-Google-Pixel-phone-deals-Superb-discounts-on-Pixel-phones-right-now.webp?1689231622",
    "https://www.homesforheroes.com/wp-content/uploads/2021/05/young-couple-shopping-online-in-kitchen-on-laptop-wife-holding-credit-card-looking-for-discounts-for-police-Homes-for-Heroes.jpg",
    "https://images.macrumors.com/t/p4OKdf4BqxBekUQvLEJQ9p5J6OE=/800x0/article-new/2023/10/Prime-Big-Deal-Days-Feature-Best-Apple-Discounts.jpg?lossy",
  ];

  const deals = [
    {
      id: 0,
      title: "Apple iPhone 12, 256GB, Blue - Unlocked (Renewed Premium)",
      typicalPrice: 546.39,
      price: 460,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/513NI5xpYjL._AC_SL1000_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
      ],
      color: "Blue",
      size: "256GB",
    },

    {
      id: 1,
      title: "Apple iPhone 11, 64GB, Black - Unlocked (Renewed)",
      typicalPrice: 307.95,
      price: 264.95,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61MG3m5FhIL._AC_SL1500_.jpg",
      color: "Black",
      size: "64GB",
    },

    {
      id: 2,
      title:
        "SAMSUNG Galaxy S20 FE G780F 128GB 8GB RAM Dual Sim GSM Unlocked International Version - Cloud Red",
      typicalPrice: 499,
      price: 499,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71NjjYcElTL._AC_SL1500_.jpg",
      color: "Cloud Red",
      size: "128GB",
    },

    {
      id: 3,
      title:
        "Xiaomi Mi 13 Ultra 5G 256GB 12GB Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) China Version - Green",
      typicalPrice: 999,
      price: 999,
      image:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/7114DYWzqML._AC_SL1500_.jpg",
      color: "Green",
      size: "256GB",
    },
  ];

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        flex: 1,
        backgroundColor: "#FBFCFC",
      }}
    >
      <ScrollView>
        <View
          style={{
            backgroundColor: "#2980B9",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "#FBFCFC",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <Ionicons
              name="search"
              size={22}
              color="black"
              style={{ paddingLeft: 10 }}
            />
            <TextInput placeholder="Search for your products..." />
          </Pressable>

          <Ionicons name="mic-outline" size={26} color="black" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            padding: 10,
            backgroundColor: "#7FB3D5",
          }}
        >
          <Ionicons name="location-outline" size={24} color="black" />

          <Pressable>
            <Text style={{ fontSize: 13, fontWeight: "500" }}>
              Deliver to Kamil - Patrice Lumumby 16/18
            </Text>
          </Pressable>

          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable
              key={index}
              style={{
                margin: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                  borderWidth: 2,
                  borderColor: "#ddd",
                  borderRadius: 25,
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: 500,
                  marginTop: 5,
                }}
              >
                {" "}
                {item?.name}{" "}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <SliderBox
          images={images}
          autoPlay
          circleLoop
          dotColor={"#F2F3F4"}
          inactiveDotColor="#2E86C1"
          ImageComponentStyle={{ width: "100%" }}
        />

        <Text
          style={{
            padding: 10,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Trending deals of the week
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {deals.map((item, index) => (
            <Pressable
              key={index}
              style={{
                marginVertical: 10,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item?.image }}
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "contain",
                  borderWidth: 2,
                  borderColor: "#ddd",
                  margin: 4,
                  borderRadius: 10,
                }}
              />
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                {" "}
                {item.price}${" "}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
