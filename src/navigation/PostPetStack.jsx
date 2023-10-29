import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostPet from '../screens/PostPet';

const Stack = createNativeStackNavigator();

const PostPetStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ title: '', headerShown: false }}
    >
      <Stack.Screen name="PostPet" component={PostPet} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
};

export default PostPetStack;
