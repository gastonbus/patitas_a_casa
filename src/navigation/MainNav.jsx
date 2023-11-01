import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';

const MainNav = () => {

  // const user = useSelector((state) => state.authSlice.user);
  const user = true;
  
  return (
    <NavigationContainer>
      {user ? <TabNav /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
