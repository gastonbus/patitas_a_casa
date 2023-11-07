import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainNav = () => {
  const user = useSelector((state) => state.authSlice.user);
  // const user = true;

  const [checkedUser, setCheckedUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userLocalData = await AsyncStorage.getItem('user');
        const userEmail = userLocalData?.userEmail;
        // const userToken = userLocalData.userToken;

        userEmail ? setCheckedUser(userEmail) : setCheckedUser(user);
      } catch (error) {
        console.log(
          'Ocurrió un error al intentar recuperar información del Local Storage:',
          error
        );
      }
    };
    checkUser();
  }, [user]);

  return (
    <NavigationContainer>
      {checkedUser ? <TabNav /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
