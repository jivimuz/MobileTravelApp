import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { AuthContext } from '../../Controller/Auth.controller'
import { MainContext } from '../../Controller/Main.controller'
import { Divider, Modal, Portal } from 'react-native-paper'
import { BASE_URL } from '../../Config/config'
import { TglReformat } from '../../Component/Tanggal.comp'
import { faEye } from '@fortawesome/free-regular-svg-icons'

const ShowNounScreen = ({ route, navigation, }) => {
    const { isLoading } = useContext(AuthContext);
    const { tempData, showNoun } = useContext(MainContext);
    const [visible, setVisible] = useState(false);
    const [ImgModal, setImgModal] = useState('');
    // console.log(route.params.id)
    useEffect(() => {
        console.log(tempData)
        showNoun(route.params.id)
    }, [])

    const showModal = (uri) => {
        setVisible(true)
        setImgModal(uri)
    };
    const hideModal = () => setVisible(false);


    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorNegative }}>
            <Spinner visible={isLoading} color='rgb(66, 103, 178)' />
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: 20, marginHorizontal: 20 }}>
                    <Image source={{ uri: `${BASE_URL}/${ImgModal}` }} style={{ height: 400, width: '100%', objectFit: 'contain' }} />
                </Modal>
            </Portal>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 30, alignSelf: 'center' }}> JAMAAH</Text>
            </View>
            {tempData.name && (
                <View>
                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => showModal(tempData.noun_photo)} >
                            <Image source={{ uri: `${BASE_URL}/${tempData.noun_photo}` }} style={{ borderRadius: 60, height: 140, width: 140, objectFit: 'cover' }} />
                        </TouchableOpacity>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 15, fontSize: 20, alignSelf: 'center' }}>{tempData.name ? tempData.name.substring(0, 30) : '...'}</Text>
                    </View>
                    <Divider style={{ margin: 10, backgroundColor: colorPrimary }} />

                    <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>Nama   :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.name}</Text>
                        </View>
                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>NIK :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.nik}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>No Passport :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.passport_number}</Text>
                        </View>
                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>TTL :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.birthplace}, <TglReformat warna={'black'} tanggal={tempData.bod} /></Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>Jenis Kelamin :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.gender}</Text>
                        </View>
                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>No HP :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.phone}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>

                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>Tipe :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.is_haji == 1 ? 'Haji' : 'Umrah'}</Text>
                        </View>
                        <View style={{ width: '49%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>Nama Paket :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.address}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '100%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', }}>Alamat :</Text>
                            <Text style={{ color: 'black', marginLeft: 5 }}>{tempData.address}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => showModal(tempData.ktp_photo)} style={{ backgroundColor: colorSecondary, padding: 5, width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 50 }}>
                            <Text style={{ width: 30 }}> <FontAwesomeIcon icon={faEye} size={25} /></Text>
                            <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}> KTP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showModal(tempData.passport_photo)} style={{ backgroundColor: colorSecondary, padding: 5, width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 50 }}>
                            <Text style={{ width: 30 }}> <FontAwesomeIcon icon={faEye} size={25} /></Text>
                            <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}> Passport</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => showModal(tempData.family_card_photo)} style={{ backgroundColor: colorSecondary, padding: 5, width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 50 }}>
                            <Text style={{ width: 30 }}> <FontAwesomeIcon icon={faEye} size={25} /></Text>
                            <Text style={{ color: 'black', fontSize: 15, alignItems: 'center' }}> KK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showModal(tempData.birth_certificate_photo)} style={{ backgroundColor: colorSecondary, padding: 5, width: '45%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderRadius: 50 }}>
                            <Text style={{ width: 30 }}> <FontAwesomeIcon icon={faEye} size={25} /></Text>
                            <Text style={{ color: 'black', fontSize: 13, alignItems: 'center' }}> A. Lahir/ S. Nikah</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export default ShowNounScreen