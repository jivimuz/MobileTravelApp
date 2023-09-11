import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Dummy } from '../../../Assets'

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorNegative }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Profile</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={Dummy} style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 70, borderColor: colorPrimary, borderWidth: 1, marginBottom: 10 }} />
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Selamat Datang, Ujang👋</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen
