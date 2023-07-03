import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { db } from "../firebace/config";
import { useSelector } from "react-redux";
import { collection } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { SafeAreaView } from "react-native-web";
import { getDocs } from "firebase/firestore";

export const CommentsScreen = ({ navigation, route }) => {
  const [coments, setComents] = useState("");
  const [allComents, setAllComents] = useState([]);
  const postId = route.params;
  const state = useSelector((state) => state.auth.logIn);
  const createPost = async () => {
    await addDoc(collection(db, `posts/${state}/commentPost`), {
      coments,
    });
  };

  const getAllPosts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsData = querySnapshot.docs.map((doc) => doc.data());
      setAllComents(postsData);
    } catch (error) {
      console.log("Error getting posts:", error);
    }
  };
  console.log(postId);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperPub}>
        <View style={styles.wrapperLogPub}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostScreen");
            }}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>

          <Text style={styles.textPub}>Створити соментар</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.main}>
        <View style={styles.wrapperProf}>
          <View>
            <FlatList
              data={allComents}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                <Text
                  style={{
                    fontFamily: "Roboto-bold",
                    fontSize: 17,
                    fontWeight: "500",
                    lineHeight: 22,
                    textAlign: "center",
                    marginLeft: "auto",
                    color: "red",
                  }}
                >
                  {item.coments}
                </Text>;
              }}
            />
          </View>
          <View style={styles.form}>
            <View
              style={{
                ...styles.inputBox,
                flexDirection: "row",
                marginBottom: 32,
              }}
            >
              <FontAwesome5 name="comment" size={24} color="#BDBDBD" />
              <TextInput
                style={styles.inputText}
                onChangeText={setComents}
                //   value={locality}
                placeholder="Коментар..."
                keyboardType="default"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnReg}
              onPress={createPost}
            >
              <Text style={styles.textBtn}>Опубліковати</Text>
            </TouchableOpacity>
          </View>
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
  textPub: {
    fontFamily: "Roboto-bold",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
    // textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  wrapperPub: { paddingTop: 45 },
  btnReg: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    width: "100%",
    alignItems: "center",
  },

  form: {
    marginTop: 36,
  },
  line: {
    height: 0.7,
    backgroundColor: "grey",
    marginTop: 10,
  },
  wrapperLogPub: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textBtn: {
    color: "#fff",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },
  main: {
    marginHorizontal: 16,
    marginBottom: "auto",
  },
  wrapperProf: {
    marginTop: 32,

    marginLeft: 9,
  },
  takePhotoOut: {
    marginBottom: 20,
    backgroundColor: "#fff",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    left: 140,
    top: 90,
    backgroundColor: "#FFFFFF4D",
  },
  takePhoto: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF4D",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    // left: 140,
    // top: 90,
  },
  imgFoto: {
    width: 343,
    height: 240,
    position: "relative",
    borderRadius: 10,
  },
  inputText: {
    fontFamily: "Roboto-regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputBox: {
    height: 55,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
  },
  wrapperInp: { marginTop: 36 },
  wrapperFootBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
});
