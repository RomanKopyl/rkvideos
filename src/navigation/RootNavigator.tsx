import remoteConfig from '@react-native-firebase/remote-config';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { createContext, useEffect, useState } from 'react';
import { MMKV } from 'react-native-mmkv';
import { HOME_SCREEN_CONFIG } from '../constants';
import { Config } from '../data/interfaces';
import { useAppDispatch } from '../hooks';
import { HomeScreen } from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { VideoScreen } from '../screens/VideoScreen';
import { setContinueVideo } from '../store/main';
import { getCurrentVideoFromStorage } from '../utils/storageHelper';
import { showError } from '../utils/helper';


export type RootStackParamList = {
    LoadingScreen: undefined,
    WelcomeScreen: undefined,
    HomeScreen: undefined,
    VideoScreen: { isContinueExist: boolean } | undefined,
};
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ConfigContext = createContext<Config | null>(null);
export const storage = new MMKV();

export const RootNavigator: React.FC = () => {
    const [config, setConfig] = useState<Config | null>(null);
    const dispatch = useAppDispatch();
    storage.set('user.name', 'Marc');

    useEffect(() => {
        remoteConfig()
            .fetchAndActivate()
            .then(() => {
                const parameters = remoteConfig().getValue(HOME_SCREEN_CONFIG);

                const jsonParam = JSON.parse(parameters.asString());
                setConfig(jsonParam);
                console.log('HOME_SCREEN_CONFIG', jsonParam);
            })
            .catch(error => showError(error));
    }, []);


    useEffect(() => {

        getCurrentVideoFromStorage()
            .then(res => {
                console.log('RES', res);

                if (!res) return;

                dispatch(setContinueVideo(res));
            })
    }, []);

    return (
        <ConfigContext.Provider value={config}>
            <Stack.Navigator initialRouteName={'LoadingScreen'}>
                <Stack.Screen
                    name={'LoadingScreen'}
                    component={LoadingScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'HomeScreen'}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'VideoScreen'}
                    component={VideoScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </ConfigContext.Provider>
    );
};
