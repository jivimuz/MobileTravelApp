import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Routes from "./App/routes";
import { NativeBaseProvider } from "native-base";


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  )
};

export default App;
