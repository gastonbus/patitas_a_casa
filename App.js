import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNav from './src/navigation/MainNav';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainContainer}>
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Home /> */}
        {/* <Categories /> */}
        {/* <Pets /> */}
        {/* <PetDetails /> */}
        {/* <Profile /> */}
        {/* <PostPet /> */}
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
