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
import Context from "./components/App/Context";
import {setDataLocal} from "./lib/data";
import methods from "./views/methods";
import NetInfo from '@react-native-community/netinfo';

const Stack = createNativeStackNavigator();

const App = (callback, deps) => {
    const scheme = useColorScheme(),
        [fontsReady, setFontsReady] = useState(false),
        [data, setData] = useState([]);

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

    const getLocalData = useCallback(async () => {
        const localData = await setDataLocal(null);
        setData(localData)
    }, [])

    const getHeroes = useCallback(async () => {
        const request = async () => {
            return await methods.getHeroes.create();
        }
        request()
            .then(async (data) => {
                setData(data);
                await setDataLocal(data)
            })
            .catch(error => {
                getLocalData()
            });
    }, [data]);


    useEffect(() => {
        getHeroes();
        loadFonts();
    }, []);


    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            if (!state.isConnected) {
                getLocalData()
            }
        });
        unsubscribe();
    })


    return (
        <Fragment>
            {
                (fontsReady) ?
                    <AppearanceProvider>
                        <Context.Provider value={{data, setData}}>
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
                        </Context.Provider>
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
