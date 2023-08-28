import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colorDanger, colorPrimary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCopyright, faEnvelope, faFileLines, faLocation, faPhone, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'
import { Caption, Title } from 'react-native-paper'

const AccountScreen = ({ navigation }) => {
    return (
        <View style={mainStyle.container}>
            <View style={mainStyle.topHeader}>
                <View style={mainStyle.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={mainStyle.avatarLight}>
                            <FontAwesomeIcon icon={faUser} size={40} color={colorPrimary} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Title style={{ ...mainStyle.title, color: 'white' }}>Iwan</Title>
                            <Caption style={{ ...mainStyle.caption, color: 'white' }}>Agen</Caption>
                        </View>
                    </View>
                </View>
                <View style={mainStyle.userInfoSection} >
                    <View style={{ marginHorizontal: 20 }}>

                        <View style={mainStyle.row}>
                            <FontAwesomeIcon icon={faPhone} color='white' size={20} />
                            <Text style={[mainStyle.textWhite, { marginLeft: 20 }]}>+821313</Text>
                        </View>
                        <View style={mainStyle.row}>
                            <FontAwesomeIcon icon={faEnvelope} color='white' size={20} />
                            <Text style={[mainStyle.textWhite, { marginLeft: 20 }]}>admin@gmail.com</Text>
                        </View>
                        <View style={mainStyle.row}>
                            <FontAwesomeIcon icon={faLocation} color='white' size={20} />
                            <Text style={[mainStyle.textWhite, { marginLeft: 20 }]}>Cirebon</Text>
                        </View>

                    </View>
                </View>
            </View>

            <View style={[mainStyle.menuWrapper, { backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10 }]}>
                <TouchableOpacity onPress={() => navigation.push('Update Log')}>
                    <View style={mainStyle.menuItem}>
                        <FontAwesomeIcon icon={faFileLines} color={colorPrimary} size={25} />
                        <Text style={mainStyle.menuItemText}>Log Pengembangan</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('Credentials')}>
                    <View style={mainStyle.menuItem}>
                        <FontAwesomeIcon icon={faCopyright} color={colorPrimary} size={25} />
                        <Text style={mainStyle.menuItemText}>Credential</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { logout() }}>
                    <View style={mainStyle.menuItem}>
                        <FontAwesomeIcon icon={faSignOut} color={colorDanger} size={25} />
                        <Text style={mainStyle.menuItemText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default AccountScreen