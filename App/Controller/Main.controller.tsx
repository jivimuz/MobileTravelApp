import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../Config/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const MainContext = createContext(null);

export const MainProvider = ({ children }) => {

    const SendUmrah = (form) => {
        axios
            .post(`${BASE_URL}/nouns`, form, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                Alert.alert(
                    'Success',
                    'Berhasil Mengajukan Cuti',
                )

            })
            .catch(error => {
                console.log(error)
                if (error.response) {
                    Alert.alert(
                        'Gagal',
                        error.response.data.message,
                    )
                } else {
                    Alert.alert(
                        'Gagal',
                        'Pegawai Belum di Mapping, Harap hubungi admin')
                }
            })
    }


    return (
        <MainContext.Provider value={{
            SendUmrah
        }}>
            {children}
        </MainContext.Provider>
    );
};
