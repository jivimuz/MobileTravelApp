import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../../Style/style'
import { Divider, Fab, Spacer } from 'native-base'
import { faChevronCircleLeft, faHistory, faPlus, faQuestion, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Spinner from 'react-native-loading-spinner-overlay'
import { AuthContext } from '../../../Controller/Auth.controller'
import { MainContext } from '../../../Controller/Main.controller'
import { BASE_URL } from '../../../Config/config'

const JamaahScreen = ({ navigation }) => {
    const { isLoading } = useContext(AuthContext);
    const { getUmrah, listUmrah } = useContext(MainContext);

    useEffect(() => {
        getUmrah()
        // console.log(listUmrah)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colorPrimary }}>
            <Spinner visible={isLoading} color={colorPrimary} />
            <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30, ...mainStyle.shadow, }} onPress={() => navigation.pop()}>
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'black' }}>Umrah</Text>
                    </View>
                </View>
            </View>

            <Fab onPress={() => { navigation.push('Add Umrah') }} placement="top-right" style={{ backgroundColor: 'orange' }} renderInPortal={false} label="Daftar" shadow={2} icon={<FontAwesomeIcon icon={faPlus} color={'white'} size={25} />} size="md" />
            {/* <Fab onPress={() => { navigation.push('Riwayat Jamaah') }} placement="top-right" right={130} renderInPortal={false} style={{ backgroundColor: 'orange' }} shadow={2} icon={<FontAwesomeIcon icon={faHistory} color={'white'} size={25} />} size="sm" /> */}
            <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
                <Divider bg="white" />
            </View>
            <View style={{ backgroundColor: colorNegative, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 10, flex: 1 }}>
                <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                    {listUmrah.length > 0 &&
                        listUmrah.map((a, i) => {
                            // console.log(a.id)
                            return (
                                <TouchableOpacity key={i} onPress={() => navigation.push('Show Noun', { id: a.id })} style={[mainStyle.shadow, { height: 'auto', marginHorizontal: 10, marginTop: 10 }]}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row' }}>
                                            <Image source={{ uri: `${BASE_URL}/${a.noun_photo}` }} style={{ borderRadius: 30, height: 50, width: 50, objectFit: 'cover' }} />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{a.name}</Text>
                                                <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>{a.gender}</Text>
                                            </View>
                                        </View>
                                        <Text style={{ marginTop: 5, fontSize: 13, color: 'black' }}>{a.status} </Text>
                                    </View>
                                    <View style={{ marginTop: 10, marginHorizontal: 40 }}>
                                        <Divider bg={colorSecondary} />
                                    </View>
                                </TouchableOpacity >
                            )
                        })}
                    <View style={{ height: 130 }} />
                </ScrollView >
            </View>
        </View >
    )
}

export default JamaahScreen