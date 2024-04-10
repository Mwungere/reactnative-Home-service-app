import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./Apps/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Colors from "./Apps/Utils/Colors";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_Z3Jvd24tamFja2FsLTY0LmNsZXJrLmFjY291bnRzLmRldiQ"
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
