import LogDisplay from "./screens/logSign/login/index.jsx";import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export default function Index() {
  return (
    <GestureHandlerRootView>
      <LogDisplay />
      <StatusBar style="auto"/>
    </GestureHandlerRootView>
  );
}
