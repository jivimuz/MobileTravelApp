import { View, Text } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { colorPrimary } from '../../Style/style'

const AddJamaahScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <TextInput label="NIK" mode='outlined' keyboardType='number-pad' maxLength={16} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
            <TextInput label="No Passport" mode='outlined' keyboardType='numbers-and-punctuation' maxLength={10} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
            <TextInput label="Nama" mode='outlined' outlineColor={colorPrimary} maxLength={50} activeOutlineColor={colorPrimary} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput label="Tempat Lahir" mode='outlined' style={{ width: '49%' }} maxLength={30} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
                <TextInput label="Tanggal Lahir" mode='outlined' style={{ width: '49%' }} outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />

            </View>
            <TextInput label="No HP" mode='outlined' keyboardType='phone-pad' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />
            <TextInput label="Keterangan" multiline style={{ height: 100 }} maxLength={255} mode='outlined' keyboardType='default' outlineColor={colorPrimary} activeOutlineColor={colorPrimary} />

            <Button mode="contained" onPress={() => console.log('Pressed')} buttonColor={colorPrimary} style={{ marginTop: 20 }}>
                Submit
            </Button>
        </View >
    )
}

export default AddJamaahScreen