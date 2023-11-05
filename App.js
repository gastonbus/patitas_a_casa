/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNav from './src/navigation/MainNav';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Agbalumo: require('./assets/fonts/Agbalumo-Regular.ttf'),
  });

  if (fontsLoaded === false) {
    return;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainContainer}>
        <MainNav />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
