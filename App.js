import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Screens/redux/store";
import { Main } from "./components/main";

export default App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
