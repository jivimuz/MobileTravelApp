import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, colorSecondary2, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faMoneyBillTransfer, faMoneyBillTrendUp, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Divider } from 'react-native-paper'

const RewardScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorNegative }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Reward</Text>
            </View>
            <Divider style={{ marginHorizontal: 10, backgroundColor: colorPrimary }} />
            <View style={{ marginTop: 20 }}>
                <View style={{ backgroundColor: colorSecondary, width: '100%', padding: 15, borderColor: colorNegative }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: colorSecondary2, width: '50%', padding: 10, borderColor: colorNegative, borderWidth: 2 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={[mainStyle.textSmall, { color: 'green', fontSize: 12, fontWeight: 'bold' }]}>Bonus :</Text>
                                <FontAwesomeIcon icon={faMoneyBillTrendUp} color='green' size={30} />

                            </View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 10 }}>Rp</Text>
                            <View style={{ marginTop: -10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>1.200.000</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: colorSecondary2, width: '50%', padding: 10, borderColor: colorNegative, borderWidth: 2 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={[mainStyle.textSmall, { color: 'orange', fontSize: 12, fontWeight: 'bold' }]}>Process :</Text>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color='orange' size={30} />

                            </View>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 10 }}>Rp</Text>
                            <View style={{ marginTop: -10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>3.200.000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: colorSecondary, borderColor: colorNegative }}>
                    <ScrollView style={{ paddingHorizontal: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>

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
                                            <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>Umrah</Text>
                                        </View>
                                    </View>
                                    <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>50%</Text>
                                </View>
                                <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                                    <Divider />
                                </View>
                            </TouchableOpacity >
                        ))}
                        <View style={{ height: 130 }} />
                    </ScrollView >
                </View>
            </View>
        </View>
    )
}

export default RewardScreen 