import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { Box, Center, Divider, Fab, Spacer } from 'native-base'
import { faPlus, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const DashboardScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colorPrimary }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black' }}>Jamaah</Text>
                </View>
            </View>

            <Fab onPress={() => { }} placement="top-right" renderInPortal={false} label="Daftar Jamaah" shadow={2} icon={<FontAwesomeIcon icon={faPlus} color={'white'} size={25} />} size="md" />
            <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
                <Divider bg="white" />
            </View>
            <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>

                {Array.from({ length: 15 }).map((_, i) => (
                    <TouchableOpacity key={i} style={[mainStyle.shadow, { height: 'auto', marginHorizontal: 10, marginTop: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row' }}>
                                <View style={{ borderRadius: 30, justifyContent: 'center', alignItems: 'center', height: 50, width: 50, backgroundColor: 'white' }}>
                                    <FontAwesomeIcon icon={faUserTie} size={30} color={colorPrimary} />
                                    {/* <Image source={uri:''} /> */}
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Ujang</Text>
                                    <Text style={{ marginTop: 5, fontSize: 13, color: 'white' }}>Laki-laki</Text>
                                </View>
                            </View>
                            <Text style={{ marginTop: 5, fontSize: 13, color: 'white' }}>2023-08-28</Text>
                        </View>
                        <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                            <Divider bg={colorSecondary} />
                        </View>
                    </TouchableOpacity >
                ))}
                <View style={{ height: 100 }} />
            </ScrollView >
        </View >
    )
}

export default DashboardScreen