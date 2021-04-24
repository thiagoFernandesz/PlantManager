import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { color } from 'react-native-reanimated';
import colors from '../src/styles/colors';
import { PlantSelect } from '../src/pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../src/pages/MyPlants';
import { Platform } from 'react-native';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return(
        <AppTab.Navigator
        tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.heading,
            labelPosition: 'beside-icon',
            style:{
                paddingVertical: Platform.OS =='ios' ? 20 : 0,
                height: 88
            },
        }}>
            <AppTab.Screen
               name="Nova Planta"
               component={PlantSelect} 
               options={{
                   tabBarIcon: (({size, color}) => (
                    <MaterialIcons
                        name='add-circle-outline'
                        size={size}
                        color={color}
                        />
               ))
               }}
            />
            <AppTab.Screen
               name="Minhas Planta"
               component={MyPlants} 
               options={{
                   tabBarIcon: (({size, color}) => (
                    <MaterialIcons
                        name='format-list-bulleted'
                        size={size}
                        color={color}
                        />
               ))
               }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;