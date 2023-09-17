import { View, Text, RefreshControl, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import { colorNegative, colorPrimary, colorSecondary, colorSecondary2, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBoxesStacked, faGift, faLandmarkDome, faMoneyBillTransfer, faMoneyBillTrendUp, faPlaneDeparture, faStarAndCrescent, faUserGear, faBell } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-native-paper'
import { BGBlue, Dummy, FullLogo, } from '../../../Assets'
import Toaster from '../../Component/Toast.comp'
import { AuthContext } from '../../Controller/Auth.controller'

const DashboardScreen = ({ navigation }) => {
    const { userInfo } = useContext(AuthContext);

    const onRefresh = () => {
        navigation.replace('Dashboard')
    };
    const nameParts = userInfo.data.user.name.split(' ');

    let firstName = '';

    if (nameParts.length >= 1) {
        firstName = nameParts[0];
    }

    return (
        <ImageBackground source={BGBlue} style={{ flex: 1 }}>
            <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh} />} showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <View style={[mainStyle.header, { borderBottomLeftRadius: 50, paddingHorizontal: 20 }]}>
                    <Toaster text={'Selamat Datang'} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={FullLogo} style={{ width: 200, height: 120, objectFit: 'contain', alignSelf: 'center' }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 10 }} onPress={() => navigation.push('Notification')}>
                            <FontAwesomeIcon icon={faBell} size={32} color='darkblue' />
                            <Badge style={{ marginTop: -30, backgroundColor: 'gold' }}>3</Badge>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <View style={{ alignItems: 'center' }}>
                        <Image source={Dummy} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 30, borderColor: colorNegative, borderWidth: 1, marginBottom: 10 }} />
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Selamat Datang, {firstName}👋</Text>
                    </View>
                    <View style={{ marginHorizontal: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.push('Event')}>
                            <View style={[mainStyle.iconContainer, { marginBottom: 10 }]}>
                                <View style={{ width: 70, height: 70, backgroundColor: colorPrimary, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <FontAwesomeIcon icon={faPlaneDeparture} size={28} color={colorNegative} />
                                    {/* <Image source={Hadir} style={{ width: 70, height: 70 }} /> */}
                                </View>
                                <Text style={[mainStyle.textSmall, { marginTop: 10, fontWeight: 'bold' }]}>Event</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.push('Paket')}>
                            <View style={[mainStyle.iconContainer, { marginBottom: 10 }]}>
                                <View style={{ width: 70, height: 70, backgroundColor: colorPrimary, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <FontAwesomeIcon icon={faBoxesStacked} size={28} color={colorNegative} />
                                    {/* <Image source={Hadir} style={{ width: 70, height: 70 }} /> */}
                                </View>
                                <Text style={[mainStyle.textSmall, { marginTop: 10, fontWeight: 'bold' }]}>Paket</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.push('Reward')}>
                            <View style={[mainStyle.iconContainer, { marginBottom: 10 }]}>
                                <View style={{ width: 70, height: 70, backgroundColor: colorPrimary, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                    <FontAwesomeIcon icon={faGift} size={28} color={colorNegative} />
                                    {/* <Image source={Terlambat} style={{ width: 70, height: 70 }} /> */}
                                </View>
                                <Text style={[mainStyle.textSmall, { marginTop: 10, fontWeight: 'bold' }]}>Reward</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={{ marginHorizontal: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <TouchableOpacity onPress={() => navigation.push('Jamaah')}>
                                <View style={[mainStyle.iconContainer, { marginBottom: 10 }]}>
                                    <View style={{ width: 70, height: 70, backgroundColor: colorPrimary, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                        <FontAwesomeIcon icon={faLandmarkDome} size={28} color={colorNegative} />
                                        {/* <Image source={Cuti} style={{ width: 70, height: 70 }} /> */}
                                    </View>
                                    <Text style={[mainStyle.textSmall, { marginTop: 10, fontWeight: 'bold' }]}>Umrah</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.push('Haji')}>
                                <View style={[mainStyle.iconContainer, { marginBottom: 10 }]}>
                                    <View style={{ width: 70, height: 70, backgroundColor: colorPrimary, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                        <FontAwesomeIcon icon={faStarAndCrescent} size={28} color={colorNegative} />
                                        {/* <Image source={Cuti} style={{ width: 70, height: 70 }} /> */}
                                    </View>
                                    <Text style={[mainStyle.textSmall, { marginTop: 10, fontWeight: 'bold' }]}>Haji Khusus</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.push('Profile')}>
                                <View style={[mainStyle.iconContainer, { marginBottom: 10 }]}>
                                    <View style={{ width: 70, height: 70, backgroundColor: colorPrimary, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                        <FontAwesomeIcon icon={faUserGear} size={28} color={colorNegative} />
                                        {/* <Image source={Cuti} style={{ width: 70, height: 70 }} /> */}
                                    </View>
                                    <Text style={[mainStyle.textSmall, { marginTop: 10, fontWeight: 'bold' }]}>Profile</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                        {/* <View style={{ backgroundColor: 'orange', width: '100%', padding: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: colorNegative, borderWidth: 2, flexDirection: 'row' }}>
                            <Text style={[mainStyle.textSmall, { color: 'black', width: '15%' }]}>Bonus     :</Text>
                            <View style={{ width: '75%' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>Rp.  3.200.000</Text>
                            </View>
                            <View style={{ width: '10%' }}>
                                <FontAwesomeIcon icon={faMoneyBillTrendUp} color={colorNegative} size={30} />
                            </View>
                        </View>

                        <View style={{ backgroundColor: colorPrimary, width: '100%', padding: 15, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderColor: colorNegative, borderWidth: 2, flexDirection: 'row' }}>
                            <Text style={[mainStyle.textSmall, { color: 'black', width: '15%' }]}>Process :</Text>
                            <View style={{ width: '75%' }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>Rp. 1.200.000</Text>
                            </View>
                            <View style={{ width: '10%' }}>
                                <FontAwesomeIcon icon={faMoneyBillTransfer} color='white' size={30} />
                            </View>
                        </View> */
                        }

                        <View style={{ backgroundColor: colorSecondary, width: '100%', padding: 15, borderColor: colorNegative }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: colorSecondary2, width: '50%', padding: 10, borderColor: colorNegative, borderWidth: 2 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={[mainStyle.textSmall, { color: 'green', fontSize: 12, fontWeight: 'bold' }]}>Reward :</Text>
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
                    </View>

                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'orange', fontSize: 15, fontWeight: 'bold' }}>Total Jamaah Didaftarkan</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>

                        <View style={[mainStyle.iconContainer2, mainStyle.shadow, { backgroundColor: colorNegative, marginBottom: 10 }]}>
                            <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                {/* <FontAwesomeIcon icon={faUser} size={30} color='orange' /> */}
                                <Text style={{ color: 'orange', fontSize: 40, fontWeight: 'bold' }}>3</Text>
                            </View>
                            <Text style={mainStyle.textSmall}>Umrah</Text>
                        </View>
                        <View style={{ width: 20 }} />

                        <View style={[mainStyle.iconContainer2, mainStyle.shadow, { backgroundColor: colorNegative, marginBottom: 10 }]}>
                            <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'orange', fontSize: 40, fontWeight: 'bold' }}>0</Text>

                            </View>
                            <Text style={mainStyle.textSmall}>Haji Khusus</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >

    )
}

export default DashboardScreen