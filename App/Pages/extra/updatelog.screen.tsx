import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base'
import { colorPrimary, mainStyle } from '../../Style/style'

const UpdateLogScreen = () => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ borderBottomWidth: 1, padding: 20, borderBottomColor: 'grey' }}>
                <Text style={{ fontSize: 15, color: colorPrimary, fontWeight: 'bold' }}>Aplikasi Terinstal Versi 1.0.0 (Alpha)</Text>
            </View>
            <ScrollView style={{ marginHorizontal: 20 }} >
                <View>
                    <Text style={[mainStyle.subCaption, { color: colorPrimary, marginTop: 10 }]}>Versi 1.0.0 (Alpha)</Text>
                    <View>
                        <Text style={[{ fontSize: 12, color: 'grey' }]}>~~~</Text>
                    </View>
                </View>



            </ScrollView >
        </View >
    )
}

export default UpdateLogScreen