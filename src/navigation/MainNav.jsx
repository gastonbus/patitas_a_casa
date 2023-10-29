import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthStack from './AuthStack';

const MainNav = () => {
  const user = true;
  return (
    <NavigationContainer>
      {user ? <TabNav /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
