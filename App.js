import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LensProvider, Profiles } from '@lens-protocol/react-native-lens-ui-kit';
import ProfileView from "./ProfileView";
import ViewFollowing from "./ViewFollowing";
import ViewComments from "./ViewComments";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <LensProvider theme="dark">
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Profiles" component={ProfileComponent} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
          <Stack.Screen name="ViewComments" component={ViewComments} />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  )
}

function ProfileComponent({
  navigation
}) {
  return (
    <Profiles
      onProfilePress={
        profile => navigation.navigate(
          "Profile", { profile }
        )
      }
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
