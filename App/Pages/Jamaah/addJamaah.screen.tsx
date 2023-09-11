import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import DocumentPicker from 'react-native-document-picker'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const AddJamaahScreen = ({ navigation }) => {
    const [ktp, setKtp] = useState(null);
    const [kk, setKK] = useState(null);
    const [passport, setPassport] = useState(null);
    const [akta, setAkta] = useState(null);
    const [foto, setFoto] = useState(null);

    const uploadFoto = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles]
            })

            console.log(result);
            setKtp(result);

        } catch (error) {
            setFoto(null);
            console.error("Upload Error", error)
        }
    }


    const uploadKTP = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles]
            })

            console.log(result);
            setKtp(result);

        } catch (error) {
            setKtp(null);
            console.error("Upload Error", error)
        }
    }

    const uploadPassport = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles]
            })

            console.log(result);
            setPassport(result);

        } catch (error) {
            setPassport(null);
            console.error("Upload Error", error)
        }
    }

    const uploadKK = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles]
            })

            console.log(result);
            setKK(result);

        } catch (error) {
            setKK(null);
            console.error("Upload Error", error)
        }
    }

    const uploadAkta = async () => {
        try {
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.allFiles]
            })

            console.log(result);
            setAkta(result);

        } catch (error) {
            setAkta(null);
            console.error("Upload Error", error)
        }
    }



    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorNegative }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Daftar Umroh</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <TextInput label="Nama" mode='outlined' outlineColor={colorPrimary} maxLength={50} style={{ backgroundColor: colorNegative }} textColor='black' activeOutlineColor={colorPrimary} />
                <TextInput label="NIK" mode='outlined' keyboardType='number-pad' maxLength={16} style={{ backgroundColor: colorNegative }} textColor='black' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput label="Tempat Lahir" mode='outlined' style={{ width: '49%', backgroundColor: colorNegative }} textColor='black' maxLength={30} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                    <TextInput label="Tanggal Lahir" mode='outlined' style={{ width: '49%', backgroundColor: colorNegative }} textColor='black' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                </View>
                <TextInput label="Jenis Kelamin" mode='outlined' keyboardType='numbers-and-punctuation' style={{ backgroundColor: colorNegative }} textColor='black' maxLength={10} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <TextInput label="No HP" mode='outlined' keyboardType='phone-pad' style={{ backgroundColor: colorNegative }} textColor='black' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <TextInput label="No Passport" mode='outlined' keyboardType='numbers-and-punctuation' style={{ backgroundColor: colorNegative }} textColor='black' maxLength={10} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <TextInput label="No Passport" mode='outlined' keyboardType='numbers-and-punctuation' style={{ backgroundColor: colorNegative }} textColor='black' maxLength={10} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />

                <TextInput label="Alamat" multiline style={{ height: 100, backgroundColor: colorNegative }} textColor='black' maxLength={255} mode='outlined' keyboardType='default' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => uploadKTP()} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>KTP {ktp ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => uploadPassport()} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>Passport {passport ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => uploadKK()} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>KK {kk ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => uploadAkta()} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>A. Lahir/ S. Nikah {akta ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => uploadFoto()} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>Foto {foto ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                </View>


                <Button mode="contained" onPress={() => console.log('Pressed')} buttonColor={colorPrimary} style={{ marginTop: 30 }}>
                    Submit
                </Button>
            </View>
        </ScrollView>
    )
}

export default AddJamaahScreen