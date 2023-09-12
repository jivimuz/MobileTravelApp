import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colorNegative, colorPrimary } from './Style/style';
import LoginScreen from './Pages/Auth/login.screen';
import CredentialSreen from './Pages/extra/credential.screen';
import AddJamaahScreen from './Pages/Jamaah/addJamaah.screen';
import RewardScreen from './Pages/reward/reward.screen';
import ProfileScreen from './Pages/Profile/profile.screen';
import DashboardScreen from './Pages/Dashboard/dashboard.screen';
import JamaahScreen from './Pages/Jamaah/jamaah.screen';
import HajiScreen from './Pages/Haji/Haji.screen';
import AddHajiScreen from './Pages/Haji/addHajiscreen';
import EventScreen from './Pages/Event/Event.screen';
import PaketScreen from './Pages/Paket/Paket.screen';
import NotificationScreen from './Pages/Notification/Notification.screen';
import PasswordScreen from './Pages/Profile/Password.screen';
import PaketDetailScreen from './Pages/Paket/PaketDetail.screen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, statusBarColor: 'rgb(206,243,252)' }} />

                {/* Main */}
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false, statusBarColor: 'rgb(206,243,252)' }} />

                {/* Profile */}
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, statusBarColor: colorNegative }} />
                <Stack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false, statusBarColor: colorNegative }} />

                {/* Jamaah */}
                <Stack.Screen name="Jamaah" component={JamaahScreen} options={{ headerShown: false, statusBarColor: colorPrimary }} />
                <Stack.Screen name="Add Jamaah" component={AddJamaahScreen} options={{ headerShown: false, statusBarColor: colorNegative }} />

                {/* Haji */}
                <Stack.Screen name="Haji" component={HajiScreen} options={{ headerShown: false, statusBarColor: colorPrimary }} />
                <Stack.Screen name="Add Haji" component={AddHajiScreen} options={{ headerShown: false, statusBarColor: colorNegative }} />

                {/* Event */}
                <Stack.Screen name="Event" component={EventScreen} options={{ headerShown: false, statusBarColor: colorPrimary }} />

                {/* Paket */}
                <Stack.Screen name="Paket" component={PaketScreen} options={{ headerShown: false, statusBarColor: colorPrimary }} />
                <Stack.Screen name="Paket Detail" component={PaketDetailScreen} options={{ headerShown: false, statusBarColor: colorNegative }} />

                {/* Reward */}
                <Stack.Screen name="Reward" component={RewardScreen} options={{ headerShown: false, statusBarColor: colorNegative }} />

                {/* Extra */}
                <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: false, statusBarColor: colorNegative }} />
                <Stack.Screen name="Credentials" component={CredentialSreen} options={{ headerShown: false, statusBarColor: colorPrimary }} />


            </Stack.Navigator>
        </>
    )
}

export default Routes