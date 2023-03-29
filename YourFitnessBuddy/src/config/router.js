import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styled from 'styled-components/native';

import HomeScreen from '../screens/home';
import FavoritesScreen from '../screens/favorites';
import ExercisesScreen from '../screens/exercises';

const Stack = createStackNavigator();

export default Router = ({ handleThemeChange }) => {
  return (
    <GlobalSafeArea>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            initialParams={{ handleThemeChange: handleThemeChange }}
          />
          <Stack.Screen
            name="exercises"
            component={ExercisesScreen}
            initialParams={{ handleThemeChange: handleThemeChange }}
          />
          <Stack.Screen
            name="favorites"
            component={FavoritesScreen}
            initialParams={{ handleThemeChange: handleThemeChange }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalSafeArea>
  );
}

const GlobalSafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
