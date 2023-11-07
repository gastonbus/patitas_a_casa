import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Pets from '../screens/Pets';
import PetDetails from '../screens/PetDetails';
import Categories from '../screens/Categories';
import { colors } from '../theme/colors';
import PetLoc from '../screens/PetLoc';

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
        options={{ headerTitle: 'Home' }}
      />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Pets" component={Pets} />
      <Stack.Screen name="PetDetails" component={PetDetails} />
      <Stack.Screen name="PetLoc" component={PetLoc} />
    </Stack.Navigator>
  );
};

export default HomeStack;
