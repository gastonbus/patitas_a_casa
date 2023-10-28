import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from './src/screens/Login'
import { colors } from './src/theme/colors'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import Categories from './src/screens/Categories'
import Pets from './src/screens/Pets'
import PetDetails from './src/screens/PetDetails'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      {/* <Categories /> */}
      <Pets />
      {/* <PetDetails /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ultraLightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
