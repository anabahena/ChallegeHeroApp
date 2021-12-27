import React, {useCallback, useEffect, useState, Fragment} from "react";
import {StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./views/WizardHeroes/Home";
import {ThemeDark, ThemeLight} from "./components/Theme";
import Details from "./views/WizardHeroes/Details";
import {AppearanceProvider} from 'react-native-appearance';
import * as Font from 'expo-font';
import Search from "./views/WizardHeroes/Search";

const Stack = createNativeStackNavigator();

const App = () => {
    const scheme = useColorScheme(),
        [fontsReady, setFontsReady] = useState(false);

    const loadFonts = useCallback(async () => {
        await Font.loadAsync({
            'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
            'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
            'Montserrat_Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
            'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        });
        setFontsReady(true);
    }, [setFontsReady]);

    useEffect(() => {
        loadFonts()
    }, []);


    return (
        <Fragment>
            {
                (fontsReady) ?
                    <AppearanceProvider>
                        <NavigationContainer theme={scheme === 'dark' ? ThemeDark : ThemeLight}>
                            <Stack.Navigator>
                                <Stack.Screen name="Home" component={Home} options={{
                                    headerShown: false
                                }}/>
                                <Stack.Screen name="Detail" component={Details} options={{
                                    headerShown: false
                                }}/>
                                <Stack.Screen name="Search" component={Search} options={{
                                    headerShown: false
                                }}/>
                            </Stack.Navigator>
                        </NavigationContainer>
                    </AppearanceProvider>
                    : null
            }
        </Fragment>

    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
