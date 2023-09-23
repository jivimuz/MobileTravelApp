import { View, Text, TouchableOpacity, ScrollView, PermissionsAndroid, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import DropdownSelect from 'react-native-input-select'
import DatePicker from 'react-native-date-picker'
import { TglHariIni } from '../../../Component/Tanggal.comp'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MainContext } from '../../../Controller/Main.controller'
import { AuthContext } from '../../../Controller/Auth.controller'
import Spinner from 'react-native-loading-spinner-overlay'

const AddJamaahScreen = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [nik, setNik] = useState(null);
    const [nopassport, setNoPassport] = useState(null);
    const [phone, setPhone] = useState(null);
    const [birthplace, setBirthplace] = useState(null);
    const [bod, setBod] = useState(new Date());
    const [address, setAddress] = useState(null);
    const [gender, setGender] = useState(null);
    const [ktp, setKtp] = useState(null);
    const [kk, setKK] = useState(null);
    const [passport, setPassport] = useState(null);
    const [akta, setAkta] = useState(null);
    const [foto, setFoto] = useState(null);
    const [open, setOpen] = useState(false)

    const { isLoading } = useContext(AuthContext);
    const { SendNoun } = useContext(MainContext);

    const selectImage = (func) => {
        const options = {
            title: 'Pilih Foto',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('Pemilihan gambar dibatalkan');
            } else if (response.error) {
                console.log('Error:', response.error);


                if (func == 'ktp') {
                    setKtp(null)
                } else if (func == 'kk') {
                    setKK(null)
                } else if (func == 'passport') {
                    setPassport(null)
                } else if (func == 'akta') {
                    setAkta(null)
                } else if (func == 'foto') {
                    setFoto(null)
                }
            } else {

                var data = {
                    uri: response.assets[0].uri,
                    type: 'image/jpg',
                    name: `${func}.jpg`,
                }

                if (func == 'ktp') {
                    setKtp(data)
                } else if (func == 'kk') {
                    setKK(data)
                } else if (func == 'passport') {
                    setPassport(data)
                } else if (func == 'akta') {
                    setAkta(data)
                } else if (func == 'foto') {
                    setFoto(data)
                }
            }
        });
    };

    const showConfirmAlert = () => {
        if (name == null || nik == null || nopassport == null || phone == null || birthplace == null || bod == null || address == null || gender == null || ktp == null || foto == null || kk == null || akta == null || passport == null) {
            Alert.alert('Warning',
                'Harap lengkapi data !!',)
        } else {
            Alert.alert(
                'Konfirmasi',
                'Apakah data sudah benar?',
                [
                    {
                        text: 'Batal',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            const year = bod.getFullYear();
                            const month = String(bod.getMonth() + 1).padStart(2, '0');
                            const day = String(bod.getDate()).padStart(2, '0');
                            const formattedDate = `${year}-${month}-${day}`;
                            // console.log(formattedDate)

                            const form = new FormData();
                            form.append('name', name);
                            form.append('nik', nik);
                            form.append('passport_number', nopassport);
                            form.append('phone', phone);
                            form.append('birthplace', birthplace);
                            form.append('bod', formattedDate);
                            form.append('address', address);
                            form.append('gender', gender);
                            form.append('ktp_photo', ktp);
                            form.append('family_card_photo', kk);
                            form.append('birth_certificate_photo', akta);
                            form.append('noun_photo', foto);
                            form.append('passport_photo', passport);
                            form.append('is_haji', 0);

                            // console.log(form)

                            SendNoun(form, navigation, 0);
                        },
                    },
                ],
                { cancelable: false }
            );
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Kamera',
                    message:
                        'Ijinkan mengambil data kamera untuk pengiriman',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );

        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorNegative }}>
            <Spinner visible={isLoading} color='rgb(66, 103, 178)' />
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative' }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Daftar Umroh</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <TextInput label="Nama" mode='outlined' value={name} onChangeText={(text) => setName(text)} outlineColor={colorPrimary} maxLength={50} style={{ backgroundColor: colorNegative }} textColor='black' activeOutlineColor={colorPrimary} />
                <TextInput label="NIK" mode='outlined' value={nik} onChangeText={(text) => setNik(text)} keyboardType='number-pad' maxLength={16} style={{ backgroundColor: colorNegative }} textColor='black' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput label="Tempat Lahir" value={birthplace} onChangeText={(text) => setBirthplace(text)} mode='outlined' style={{ width: '49%', backgroundColor: colorNegative }} textColor='black' maxLength={30} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />

                    <TouchableOpacity onPress={() => setOpen(true)} style={{ backgroundColor: colorNegative, borderColor: colorPrimary, borderWidth: 1, width: '49%', marginTop: 6, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}><TglHariIni tanggal={bod} warna={'black'} /></TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <DropdownSelect
                        placeholder="Jenis Kelamin"
                        options={[
                            { label: 'Laki-laki', value: 'Laki-laki' },
                            { label: 'Perempuan', value: 'Perempuan' },
                        ]}
                        selectedValue={gender}
                        onValueChange={(value) => setGender(value)}
                        primaryColor={colorPrimary}
                        dropdownStyle={{ backgroundColor: colorNegative, borderColor: colorPrimary, height: 10 }}
                        // isSearchables
                        placeholderStyle={{ color: 'grey' }}
                        checkboxLabelStyle={{ color: colorPrimary }}
                    />
                </View>
                <TextInput label="No HP" value={phone} onChangeText={(text) => setPhone(text)} mode='outlined' keyboardType='phone-pad' style={{ backgroundColor: colorNegative }} textColor='black' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <TextInput label="No Passport" value={nopassport} onChangeText={(text) => setNoPassport(text)} mode='outlined' keyboardType='numbers-and-punctuation' style={{ backgroundColor: colorNegative }} textColor='black' maxLength={10} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />

                <TextInput label="Alamat" multiline value={address} onChangeText={(text) => setAddress(text)} style={{ height: 100, backgroundColor: colorNegative }} textColor='black' maxLength={255} mode='outlined' keyboardType='default' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => selectImage('ktp')} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>KTP {ktp ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectImage('passport')} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>Passport {passport ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => selectImage('kk')} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>KK {kk ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => selectImage('akta')} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>A. Lahir/ S. Nikah {akta ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => selectImage('foto')} style={{ marginTop: 10, width: '49%', padding: 10, backgroundColor: colorSecondary, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>Foto {foto ? (<FontAwesomeIcon icon={faCircleCheck} color='green' />) : (<FontAwesomeIcon icon={faCircleXmark} color='orange' />)}</Text>
                    </TouchableOpacity>
                </View>


                <Button mode="contained" onPress={() => showConfirmAlert()} buttonColor={colorPrimary} style={{ marginTop: 30 }}>
                    Submit
                </Button>
            </View>

            <DatePicker
                modal
                open={open}
                date={bod}
                locale='id'
                title='Tanggal Lahir'
                onConfirm={(date) => {
                    setOpen(false)
                    setBod(date)
                }}
                mode='date'
                onCancel={() => {
                    setOpen(false)
                }}
                maximumDate={new Date()}
            />
        </ScrollView>
    )
}

export default AddJamaahScreen