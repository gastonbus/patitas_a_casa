import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Pets from '../screens/Pets';
import PetDetails from '../screens/PetDetails';
import Categories from '../screens/Categories';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'Home',
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.darkBlue,
        },
        headerTintColor: colors.ultraLightBlue,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Categorias' }}
      />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Pets" component={Pets} />
      <Stack.Screen name="PetDetails" component={PetDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
