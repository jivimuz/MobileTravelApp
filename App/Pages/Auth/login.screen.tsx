import { ImageBackground, StyleSheet, View, Image, Linking } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Card, TextInput } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { BGBlue3, Logo } from '../../../Assets';
import { AuthContext } from '../../Controller/Auth.controller';
import Alerts from '../../Component/Alerts.comp';

const LoginScreen = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const { isLoading, login } = useContext(AuthContext);

    return (
        <ImageBackground source={BGBlue3} style={mainStyle.contentCenter}>
            <View style={mainStyle.view}>
                <Spinner visible={isLoading} color='rgb(66, 103, 178)' />
                <View style={mainStyle.itemCenter}>
                    <Image source={Logo} style={styles.LogoImage} />
                </View>
                <Card style={{ backgroundColor: colorNegative }}>
                    <Card.Title title="Silahkan Login" titleStyle={mainStyle.cardTitle} />
                    <Card.Content>
                        <Alerts status={'Error'} />
                        <TextInput
                            mode='outlined'
                            outlineColor={colorPrimary}
                            activeOutlineColor={colorPrimary}
                            value={username}
                            textColor='black'
                            onChangeText={(text) => setUsername(text)}
                            label='Username/Email'
                            keyboardType='default'
                            style={{
                                backgroundColor: colorNegative,
                            }}
                            right={<FontAwesomeIcon icon={faUser} color='black' />}
                        />
                        <TextInput
                            mode='outlined'
                            outlineColor={colorPrimary}
                            activeOutlineColor={colorPrimary}
                            textColor='black'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            label='Password'
                            style={{
                                backgroundColor: colorNegative,
                            }}
                            secureTextEntry={true}
                        />

                        <Button mode='contained' style={[mainStyle.btn, mainStyle.bgPrimary]} onPress={() => { login(username, password) }} >LOGIN</Button>

                        <Button uppercase={false} style={mainStyle.btn} textColor={colorPrimary}
                            onPress={() => {
                                Linking.openURL('https://api.whatsapp.com/send/?phone=6282120741970&text=Daftar+agen&type=phone_number&app_absent=0')
                                // navigation.push('ResetPassword')
                            }}
                        >Daftar Agen?</Button>
                    </Card.Content>
                </Card>
            </View>
        </ImageBackground >
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    LogoImage: {

        width: 150,
        height: 150,
        marginBottom: 50,
    }
})