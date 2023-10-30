import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { colors } from './src/theme/colors';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Categories from './src/screens/Categories';
import Pets from './src/screens/Pets';
import PetDetails from './src/screens/PetDetails';
import PostPet from './src/screens/PostPet';
import Profile from './src/screens/Profile';
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
