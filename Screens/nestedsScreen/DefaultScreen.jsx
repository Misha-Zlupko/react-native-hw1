import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import { Feather, Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";

export const DefaultPostScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (route.params) {
      // setPosts((prevState) => [...prevState, route.params]);
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperPub}>
        <View style={styles.wrapperLogPub}>
          <Text style={styles.textPub}>Публікації</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={styles.exitBtn}
          >
            <Feather name="log-out" size={24} color="#bdbdbd" />
          </TouchableOpacity>
        </View>

        <View style={styles.line}></View>
      </View>
      <View style={styles.main}>
        <View style={styles.wrapperProf}>
          <Image
            style={styles.imgFoto}
            source={require("../../Screens/images/Mini-foto.png")}
          />
          <View style={styles.wrapperInfo}>
            <Text style={styles.nameProf}>Natali Romanova</Text>
            <Text style={styles.emailProf}>email@example.com</Text>
          </View>
        </View>
        {!posts && (
          <View style={styles.wrapperPublic}>
            <FlatList
              data={posts}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Image source={{ uri: item.foto }} style={styles.imgPubFoto} />
              )}
            />

            {/* <Image
            style={styles.imgFoto}
            source={require("../Screens/images/Rectangle-23.png")}
          /> */}
            <Text style={styles.namePub}>Ліс</Text>
            <View style={styles.wrapperBtnPost}>
              <TouchableOpacity
                style={styles.commentsInfo}
                onPress={() => navigation.navigate("Comments")}
              >
                <FontAwesome5 name="comment" size={24} color="#BDBDBD" />
                <Text style={styles.comentText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.locationInfo}
                onPress={() => navigation.navigate("MapScreen")}
              >
                <Feather name="map-pin" size={24} color="#BDBDBD" />
                <MapView
                  style={styles.mapStyle}
                  region={{
                    // ...location,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                />
                {/* <Text style={styles.loctionText}>Location:</Text> */}
                <View style={styles.underline}></View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.line}></View>
        <View style={styles.wrapperBtns}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DefaultPost");
            }}
          >
            <Ionicons name="ios-grid-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => {
              navigation.navigate("CreatePostsScreen");
            }}
          >
            <Ionicons name="add" size={24} color={"#FFFFFF"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProfileScreen");
            }}
          >
            <Feather name="user" size={24} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgPubFoto: {
    width: 340,
    height: 240,
  },
  textPub: {
    fontFamily: "Roboto-bold",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "center",
    marginLeft: "auto",
  },
  wrapperPub: { paddingTop: 27 },
  line: {
    height: 1,
    backgroundColor: "grey",
    marginTop: 10,
  },
  imgFoto: {},
  wrapperProf: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  main: { marginHorizontal: 16, marginBottom: "auto" },
  wrapperInfo: {
    marginLeft: 7,
  },
  nameProf: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 16,
  },
  emailProf: {
    fontSize: 13,
    lineHeight: 16,
  },
  footer: {
    justifyContent: "flex-end",
  },
  wrapperBtns: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    gap: 30,
    marginBottom: 23,
    marginTop: 10,
  },
  btnAdd: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperLogPub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  exitBtn: {
    marginLeft: "auto",
    marginRight: 10,
  },
  wrapperBtnPost: {
    flexDirection: "row",
    gap: 48,
  },
  wrapperPublic: {
    marginTop: 32,
    marginBottom: 32,
  },
  namePub: {
    marginTop: 10,
    marginBottom: 10,
  },
  locationInfo: {
    flexDirection: "row",
    gap: 5,
  },
  commentsInfo: {
    flexDirection: "row",
    gap: 5,
  },
  locationText: {
    fontFamily: "Roboto-bold",
    marginRight: 5,
  },
  underline: {
    height: 1,
    backgroundColor: "grey",
    marginTop: 2,
  },
});
