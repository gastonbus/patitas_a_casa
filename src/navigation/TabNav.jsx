import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme/colors';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import PostPetStack from './PostPetStack';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title: '', headerShown: false }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={36}
              color={focused ? colors.darkBlue : colors.lightBlue}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PostPetStack"
        component={PostPetStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="add-box"
              size={36}
              color={focused ? colors.darkBlue : colors.lightBlue}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="person"
              size={36}
              color={focused ? colors.darkBlue : colors.lightBlue}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
