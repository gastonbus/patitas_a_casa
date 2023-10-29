import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Pets from "../screens/Pets";
import PetDetails from "../screens/PetDetails";
import Categories from "../screens/Categories";


const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={{ title: "", headerShown: false }}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Categories" component={Categories}  title="Home"/>
			<Stack.Screen name="Pets" component={Pets} />
			<Stack.Screen name="PetDetails" component={PetDetails} />
		</Stack.Navigator>
	);
};

export default HomeStack;