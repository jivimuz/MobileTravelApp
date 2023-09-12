import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Divider } from 'react-native-paper'
import { faChevronLeft, faKaaba } from '@fortawesome/free-solid-svg-icons'
import { DummyBanner } from '../../../Assets'

const PaketDetailScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorNegative }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Paket</Text>
            </View>
            <Divider style={{ margin: 20, backgroundColor: colorPrimary }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: colorSecondary }}>
                    <Image source={DummyBanner} style={{ width: '100%', height: 350, objectFit: 'contain' }} />
                </View>

                <View style={{ marginVertical: 10, justifyContent: 'center', marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 13 }}>Senin, 7 Desember 2023</Text>
                        <FontAwesomeIcon icon={faKaaba} />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={[mainStyle.title, { color: 'black', marginTop: 20 }]}>
                            Umrah + Mesir
                        </Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Garuda Indonesia</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>

                        <View style={{ width: 50 }}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>Hotel :</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>Total  :</Text>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>Sisa : </Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>Ket     :</Text>
                            </View>
                        </View>

                        <View >
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>Bintang 2</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>100 Seat</Text>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}>20 Seat</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: 'black', fontSize: 13 }}> Blasmdasndasd  asdamdl askndmkasnda sdnaodas doadnoasd</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default PaketDetailScreen