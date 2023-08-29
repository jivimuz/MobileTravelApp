import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colorPrimary } from './Style/style';
import MainScreen from './Pages/main.screen';
import LoginScreen from './Pages/Auth/login.screen';
import CredentialSreen from './Pages/extra/credential.screen';
import UpdateLogScreen from './Pages/extra/updatelog.screen';
import AddJamaahScreen from './Pages/Jamaah/addJamaah.screen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <>
            <Stack.Navigator>
                {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}

                {/* Main */}
                <Stack.Screen name="Main" component={MainScreen} options={{
                    headerShown: false, statusBarColor: colorPrimary,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: colorPrimary,
                    },
                    // headerTitleAlign: 'center',
                    // title: 'Riwayat',
                }} />

                {/* Jamaah */}
                <Stack.Screen name="Add Jamaah" component={AddJamaahScreen} options={{
                    headerShown: true, statusBarColor: colorPrimary,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: colorPrimary,
                    },
                    headerTitleAlign: 'center',
                    title: 'Daftar Jamaah',
                }} />


                <Stack.Screen name="Credentials" component={CredentialSreen} options={{
                    headerShown: true, statusBarColor: colorPrimary,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: colorPrimary,
                    },
                    headerTitleAlign: 'center',
                    title: 'Credentials',
                }} />

                <Stack.Screen name="Update Log" component={UpdateLogScreen} options={{
                    headerShown: true, statusBarColor: colorPrimary,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: colorPrimary,
                    },
                    headerTitleAlign: 'center',
                    title: 'Log Pengembangan',
                }} />


            </Stack.Navigator>
        </>
    )
}

export default Routes