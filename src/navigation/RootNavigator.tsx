import remoteConfig from '@react-native-firebase/remote-config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { createContext, useEffect, useState } from 'react';
import { Config } from '../data/interfaces';
import { HomeScreen } from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { VideoScreen } from '../screens/VideoScreen';
import { Routes } from './routes.types';
import { HOME_SCREEN_CONFIG, JSON_DATA } from '../constants';
import { showError } from '../utils/helper';

const Stack = createNativeStackNavigator();
export const ConfigContext = createContext<Config | null>(null);

export const RootNavigator: React.FC = () => {
    const [config, setConfig] = useState<Config | null>(null);

    useEffect(() => {
        remoteConfig()
            .fetchAndActivate()
            .then(() => {
                const parameters = remoteConfig().getValue(HOME_SCREEN_CONFIG);

                console.log('HOME_SCREEN_CONFIG', parameters);
                setConfig(JSON.parse(parameters.asString()));
            })
            .catch(error => showError(error));
    }, []);

    return (
        <ConfigContext.Provider value={config}>
            <Stack.Navigator initialRouteName={Routes.LoadingScreen}>
                <Stack.Screen
                    name={Routes.LoadingScreen}
                    component={LoadingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routes.HomeScreen}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routes.VideoScreen}
                    component={VideoScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </ConfigContext.Provider>
    );
};
