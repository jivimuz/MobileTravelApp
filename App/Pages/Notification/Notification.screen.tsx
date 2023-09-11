import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Divider } from 'react-native-paper'
import { ScrollView } from 'native-base'

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorNegative }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Notification</Text>
            </View>
            <Divider />
            <ScrollView>
                {Array.from({ length: 15 }).map((_, i) => (
                    <TouchableOpacity key={i} style={[mainStyle.shadow, { height: 'auto', marginHorizontal: 10, marginTop: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row' }}>

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Judul</Text>
                                    <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>Notifikasi</Text>
                                </View>
                            </View>
                            <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>2023-08-28</Text>
                        </View>
                        <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                            <Divider />
                        </View>
                    </TouchableOpacity >
                ))}
            </ScrollView>
        </View>
    )
}

export default NotificationScreen