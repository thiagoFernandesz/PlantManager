import React from 'react'
import { createStackNavigator} from '@react-navigation/stack'

import colors from '../src/styles/colors'
import { Welcome } from '../src/pages/Welcome';
import { UserIdentification } from '../src/pages/UserIdentification';
import { Confirmation } from '../src/pages/Confirmation';
import { PlantSelect } from '../src/pages/PlantSelect';
import { PlantSave } from '../src/pages/PlantSave';
import { MyPlants } from '../src/pages/MyPlants';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            },
        }}
    >
    
    <stackRoutes.Screen
        name='Welcome'
        component={Welcome}
    />

    <stackRoutes.Screen
        name='UserIdentification'
        component={UserIdentification}
    />

    <stackRoutes.Screen
        name='Confirmation'
        component={Confirmation}
    />

    <stackRoutes.Screen
        name='PlantSelect'
        component={AuthRoutes}
    />

    <stackRoutes.Screen
        name='PlantSave'
        component={PlantSave}
    />

    <stackRoutes.Screen
        name='MyPlants'
        component={AuthRoutes}
    />
    </stackRoutes.Navigator>
)

export default AppRoutes;