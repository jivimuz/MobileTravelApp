import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faKaaba } from '@fortawesome/free-solid-svg-icons'
import { Divider } from 'react-native-paper'
import { Dummy } from '../../../Assets'

const EventScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorPrimary }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorNegative, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorNegative, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Event</Text>
            </View>
            <Divider style={{ margin: 20, backgroundColor: colorNegative }} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Tahun :</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: colorNegative, marginHorizontal: 20, padding: 10, borderRadius: 10, alignItems: 'center', width: 200 }}>
                    <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 20, }}>2023</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 20, paddingVertical: 10 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <TouchableOpacity key={i} style={[mainStyle.shadow, mainStyle.eventBanner]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'black' }}>Senin,  07 Desember 2023</Text>
                            <FontAwesomeIcon icon={faKaaba} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={{ width: 200 }}>
                                <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 18 }}>Umrah + Turki</Text>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Garuda Indonesia </Text>
                            </View>
                            <Image source={Dummy} style={[{ width: 120, height: 80, borderRadius: 20, objectFit: 'cover' }]} />
                        </View>
                        <Text style={{ color: 'black', fontSize: 12, marginTop: -20 }}>20 Seat</Text>
                    </TouchableOpacity >
                ))}
                <View style={{ height: 30 }} />
            </ScrollView>
        </View >
    )
}

export default EventScreen