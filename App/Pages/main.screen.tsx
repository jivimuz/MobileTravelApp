import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorPrimary, colorSecondary, mainStyle } from '../Style/style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './Dashboard/dashboard.screen';
import { faScroll, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from 'native-base';
import { Logo } from '../../Assets';
import AccountScreen from './Account/account.screen';
import BroadcastScreen from './Broadcast/broadcast.screen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
    return <View
        style={{
            justifyContent: 'center'
        }}>
        <View style={{
            backgroundColor: 'white',
            width: 85,
            height: 85,
            alignItems: "center",
            justifyContent: 'center',
            top: -20,
            borderRadius: 40
        }}>
            <Button
                shadow={2}
                borderRadius={35}
                width={70}
                height={70}
                background={colorSecondary}
                justifyContent={'center'}
                alignContent={'center'}

                onPress={onPress}>
                <Image source={Logo} style={{ width: 40, height: 40 }} />
            </Button>
        </View>
    </View>
}


const MainScreen = () => {
    return (
        <SafeAreaView style={mainStyle.content}>
            <Tab.Navigator
                initialRouteName='Main'
                screenOptions={{
                    tabBarActiveTintColor: colorPrimary,
                    tabBarInactiveTintColor: colorSecondary,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 20,
                        left: 20,
                        right: 20,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        ...mainStyle.shadow
                    }
                }} >
                <Tab.Screen name="Broadcast" component={BroadcastScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <FontAwesomeIcon icon={faScroll} color={color} />
                }} />
                <Tab.Screen name="Main" component={DashboardScreen} options={{
                    headerShown: false,
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),

                }} />

                <Tab.Screen name="Account" component={AccountScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) =>
                        <FontAwesomeIcon icon={faUser} color={color} />
                }} />

            </Tab.Navigator>
        </SafeAreaView >
    )
}

export default MainScreen