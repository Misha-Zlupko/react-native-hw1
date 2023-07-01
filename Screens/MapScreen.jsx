import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";

export const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PostScreen");
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={{ marginLeft: 10, marginTop: 60 }}
        />
      </TouchableOpacity>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={"travel photo"}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
