import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import { colorPrimary, mainStyle } from '../../Style/style'

const CredentialSreen = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }} >
            <View style={{ borderBottomWidth: 1, padding: 20, borderBottomColor: 'grey' }}>
                <Text style={{ fontSize: 12, color: colorPrimary }}>This application is Copyright @ SIMRS Proqua All right reserved</Text>
                <Text style={{ fontSize: 12, color: colorPrimary }}>Developed in Indonesia.</Text>
            </View>
            <View style={{ padding: 20 }}>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>React Native</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://reactnative.dev/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://reactnative.dev</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>React Native Paper</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://callstack.github.io/react-native-paper/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://callstack.github.io/react-native-paper</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>Origin Font Awesome</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://origin.fontawesome.com')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://origin.fontawesome.com</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>Native Base</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://docs.nativebase.io/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://docs.nativebase.io/</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>React Navigation</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://reactnavigation.org/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://reactnavigation.org/</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView >
    )
}

export default CredentialSreen