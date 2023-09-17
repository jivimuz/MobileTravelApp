import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Routes from "./App/routes";
import { NativeBaseProvider } from "native-base";
import { AuthProvider } from "./App/Controller/Auth.controller";
import { MainProvider } from "./App/Controller/Main.controller";


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <PaperProvider>
          <AuthProvider>
            <MainProvider>
              <Routes />
            </MainProvider>
          </AuthProvider>
        </PaperProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  )
};

export default App;
