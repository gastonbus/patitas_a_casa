import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from './src/screens/Login'
import { colors } from './src/theme/colors'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import Categories from './src/screens/Categories'
import Pets from './src/screens/Pets'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      {/* <Categories /> */}
      <Pets />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.extraLightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
