import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faKaaba } from '@fortawesome/free-solid-svg-icons'
import { Divider } from 'react-native-paper'
import { DummyBanner } from '../../../Assets'

const PaketScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorPrimary }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorNegative, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorNegative, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Paket</Text>
            </View>
            <Divider style={{ margin: 10, backgroundColor: colorNegative }} />

            <ScrollView style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 20, paddingVertical: 10 }}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <TouchableOpacity key={i} style={[mainStyle.shadow, mainStyle.paketBanner]} onPress={() => navigation.push('Paket Detail')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'black' }}>Senin,  07 Desember 2023</Text>
                            <FontAwesomeIcon icon={faKaaba} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ width: 200 }}>
                                <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 15 }}>Umrah + Mesir</Text>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Garuda Indonesia </Text>
                                <Text style={{ color: 'black', fontSize: 13 }}>Start Rp 29.000.000 </Text>
                                <Text style={{ color: 'black', fontSize: 11, marginTop: 10 }}>Sisa 20 Seat</Text>
                            </View>
                            <Image source={DummyBanner} style={[{ width: 120, height: 80, borderRadius: 20, objectFit: 'cover' }]} />
                        </View>
                    </TouchableOpacity >
                ))}
                <View style={{ height: 30 }} />
            </ScrollView>
        </View >
    )
}

export default PaketScreen