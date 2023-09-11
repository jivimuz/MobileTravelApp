import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { Box, Center, Divider, Fab, Spacer } from 'native-base'
import { faChevronCircleLeft, faHistory, faPlus, faQuestion, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const HajiScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorPrimary }}>
            <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30, ...mainStyle.shadow, }} onPress={() => navigation.pop()}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black' }}>Haji</Text>
                    </View>
                </View>
            </View>

            <Fab onPress={() => { navigation.push('Add Haji') }} placement="top-right" renderInPortal={false} style={{ backgroundColor: 'orange' }} label="Daftar " shadow={2} icon={<FontAwesomeIcon icon={faPlus} color={colorNegative} size={25} />} size="md" />
            {/* <Fab onPress={() => { navigation.push('Riwayat Haji') }} placement="top-right" right={130} renderInPortal={false} style={{ backgroundColor: 'orange' }} shadow={2} icon={<FontAwesomeIcon icon={faHistory} color={colorNegative} size={25} />} size="sm" /> */}
            <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
                <Divider bg="white" />
            </View>
            <View style={{ backgroundColor: colorNegative, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 10 }}>
                <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>

                    {Array.from({ length: 15 }).map((_, i) => (
                        <TouchableOpacity key={i} style={[mainStyle.shadow, { height: 'auto', marginHorizontal: 10, marginTop: 10 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row' }}>
                                    <View style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 50, width: 50, backgroundColor: 'black' }}>
                                        <FontAwesomeIcon icon={faUserTie} size={30} color={colorPrimary} />
                                        {/* <Image source={uri:''} /> */}
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Nama Haji</Text>
                                        <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>Laki-laki</Text>
                                    </View>
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>2023-08-28</Text>
                            </View>
                            <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                                <Divider bg={colorSecondary} />
                            </View>
                        </TouchableOpacity >
                    ))}
                    <View style={{ height: 130 }} />
                </ScrollView >
            </View>
        </View >
    )
}

export default HajiScreen