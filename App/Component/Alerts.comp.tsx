import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { AuthContext } from '../Controller/Auth.controller';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colorPrimary, colorSecondary } from '../Style/style';

const Alerts = ({ status }) => {
    const { IsAlert, hideAlert } = useContext(AuthContext);
    return (
        <Modal
            animationType="fade"
            transparent={true}

            visible={IsAlert !== null}
            onRequestClose={() => hideAlert()}
        >
            <View style={styles.container}>
                <View style={styles.alertBox}>
                    <TouchableOpacity onPress={() => hideAlert()} style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}  >
                        <FontAwesomeIcon icon={faTimes} />
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={[styles.title, { color: status == 'Error' ? 'red' : status == 'Info' ? 'blue' : status == 'success' ? 'green' : 'red' }]}>
                            {status == 'Error' ? 'Error' : status == 'Info' ? 'Info' : status == 'Success' ? 'Success' : 'Error'} :</Text>
                        <Text style={styles.message}>{IsAlert}</Text>
                    </View>

                </View>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertBox: {
        backgroundColor: colorSecondary,
        padding: 10,
        borderRadius: 10,
        width: 300,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    message: {
        color: 'black',
        fontSize: 14,
        marginBottom: 10,
    },
    closeButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 16,
    },
});

export default Alerts;
