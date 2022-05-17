import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ScreenNavigator } from "./src/navigation/custom-navigator";

export default function App() {
  return (
    /* component which manages our navigation 
     tree and contains the navigation state.*/ 
    <NavigationContainer>
      <ScreenNavigator />
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */