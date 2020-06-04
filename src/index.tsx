import React from 'react';
import { enableScreens } from 'react-native-screens';
import {
    createDrawerNavigator,
    DrawerNavigationProp,
} from '@react-navigation/drawer';
import {
    createStackNavigator,
    Assets as StackAssets,
    StackNavigationProp,
    HeaderStyleInterpolators,
} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { Asset } from 'expo';
import { Asset } from 'expo-asset';
import config from './common/config';
import { MaterialIcons } from '@expo/vector-icons';
import { DefaultTheme, InitialState, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Platform, AsyncStorage, Linking } from 'react-native';
import {
    Appbar,
    Text,
} from 'react-native-paper';
import Rider from './rider';
import VehicleOwner from './vehicle-owner';

enableScreens();

type RootDrawerParams = {
    Rec: undefined;
};

type RecTabsParams = {
    Rider: undefined;
    VehicleOwner: undefined;
};

type RecStackParams = {
    RecScreen: undefined;
}

const MainDrawer = createDrawerNavigator<RootDrawerParams>();
const RecStack = createStackNavigator<RecStackParams>();
const RecTabs = createMaterialTopTabNavigator<RecTabsParams>();

const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';
const THEME_PERSISTENCE_KEY = 'THEME_TYPE';

Asset.loadAsync(StackAssets);

const homeScreenName = config.APP_NAME;

Asset.loadAsync(StackAssets);

export default function App() {
    const [theme, setTheme] = React.useState(DefaultTheme);

    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState<
        InitialState | undefined
    >();

    React.useEffect(() => {
        const restoreState = async () => {
            try {
                const initialUrl = await Linking.getInitialURL();

                if (Platform.OS !== 'web' || initialUrl === null) {
                    const savedState = await AsyncStorage.getItem(
                        NAVIGATION_PERSISTENCE_KEY
                    );

                    const state = savedState ? JSON.parse(savedState) : undefined;

                    if (state !== undefined) {
                        setInitialState(state);
                    }
                }
            } finally {
                try {
                    const themeName = await AsyncStorage.getItem(THEME_PERSISTENCE_KEY);

                    setTheme(themeName === 'dark' ? DarkTheme : DefaultTheme);
                } catch (e) {
                    // Ignore
                }

                setIsReady(true);
            }
        };
        restoreState();
    }, []);

    if (!isReady) {
        return null;
    }

    return (
        <NavigationContainer
            initialState={initialState}
            onStateChange={(state) =>
                AsyncStorage.setItem(
                    NAVIGATION_PERSISTENCE_KEY,
                    JSON.stringify(state)
                )
            }
            theme={theme}
            fallback={<Text>Loading…</Text>}
        >
            <MainDrawer.Navigator drawerType='front'>
                <MainDrawer.Screen
                    name="Rec"
                    options={{
                        title: 'REC',
                        drawerIcon: ({ size, color }) => (
                            <MaterialIcons size={size} color={color} name="folder" />
                        ),
                    }}
                >
                    {({
                        navigation,
                    }: {
                        navigation: DrawerNavigationProp<RootDrawerParams>;
                    }) => (
                            <RecStack.Navigator screenOptions={{
                                headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                            }}>
                                <RecStack.Screen
                                    name="RecScreen"
                                    options={{
                                        title: 'Rohtak Eco Club (REC)',
                                        headerLeft: () => (
                                            <Appbar.Action
                                                color={theme.colors.text}
                                                icon="menu"
                                                onPress={() => navigation.toggleDrawer()}
                                            />
                                        ),
                                    }}
                                >
                                    {({
                                        navigation,
                                    }: {
                                        navigation: StackNavigationProp<RecStackParams>;
                                    }) => (
                                            <RecTabs.Navigator>
                                                <RecTabs.Screen
                                                    name="Rider"
                                                    component={Rider}
                                                    options={{ title: 'I am a Rider' }}
                                                />
                                                <RecTabs.Screen
                                                    name="VehicleOwner"
                                                    component={VehicleOwner}
                                                    options={{ title: 'I am a Vehicle Owner' }}
                                                />
                                            </RecTabs.Navigator>
                                        )}
                                </RecStack.Screen>
                            </RecStack.Navigator>
                        )}
                </MainDrawer.Screen>

            </MainDrawer.Navigator>
        </NavigationContainer>
    );
}