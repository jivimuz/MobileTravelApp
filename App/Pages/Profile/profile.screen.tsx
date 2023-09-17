import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { faChevronLeft, faUserTie, faRightFromBracket, faCodeCommit, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Dummy } from '../../../Assets'
import { Divider } from 'react-native-paper'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { AuthContext } from '../../Controller/Auth.controller'

const ProfileScreen = ({ navigation }) => {
    const { logout, userInfo } = useContext(AuthContext);
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
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{userInfo.data.user.name.substring(0, 20)}</Text>
                    <Text style={{ color: colorPrimary, fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>{userInfo.data.user.email}</Text>
                </View>
            </View>
            <Divider style={{ margin: 20 }} />
            <ScrollView style={{ backgroundColor: colorPrimary, flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingHorizontal: 10 }}>
                <TouchableOpacity style={[mainStyle.shadow, { height: 50, paddingHorizontal: 20, marginTop: 10, backgroundColor: colorSecondary, paddingVertical: 10, borderRadius: 20 }]} onPress={() => navigation.push('Password')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faKey} size={30} color={'brown'} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Ganti Password</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity style={[mainStyle.shadow, { height: 50, paddingHorizontal: 20, marginTop: 10, backgroundColor: colorSecondary, paddingVertical: 10, borderRadius: 20 }]} onPress={() => navigation.push('Credentials')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faCopyright} size={30} color={'gold'} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Credentials</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity style={[mainStyle.shadow, { height: 50, paddingHorizontal: 20, marginTop: 10, backgroundColor: colorSecondary, paddingVertical: 10, borderRadius: 20 }]}
                    onPress={() => logout()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faRightFromBracket} size={30} color={'red'} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Log Out</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >

                <View style={{ height: 30 }} />
            </ScrollView>
        </View >
    )
}

export default ProfileScreen
