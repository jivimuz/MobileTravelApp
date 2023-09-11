import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import DocumentPicker from 'react-native-document-picker'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const PasswordScreen = ({ navigation }) => {
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
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Password</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Password Lama :</Text>
                <TextInput label="Password Lama" secureTextEntry={true} mode='outlined' outlineColor={colorPrimary} maxLength={50} style={{ backgroundColor: colorNegative }} textColor='black' activeOutlineColor={colorPrimary} />
                <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>Password Baru :</Text>
                <TextInput label="Password Baru" secureTextEntry={true} mode='outlined' keyboardType='number-pad' maxLength={16} style={{ backgroundColor: colorNegative }} textColor='black' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />

                <Button mode="contained" onPress={() => console.log('Pressed')} buttonColor={colorPrimary} style={{ marginTop: 30 }}>
                    Submit
                </Button>
            </View>
        </ScrollView>
    )
}

export default PasswordScreen