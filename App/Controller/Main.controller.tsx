import React, { createContext, useState, useContext } from "react";
import { BASE_URL } from "../Config/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { AuthContext } from "./Auth.controller";

export const MainContext = createContext(null);

export const MainProvider = ({ children }) => {
    const { token, setIsLoading } = useContext(AuthContext);
    const [listUmrah, setListUmrah] = useState({});
    const [listHaji, setListHaji] = useState({});
    const [tempData, setTempData] = useState({});


    const getUmrah = () => {
        setIsLoading(true)
        axios
            .get(`${BASE_URL}/api/nouns/umroh`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                // console.log(res.data.data)
                setListUmrah(res.data.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                if (error.response) {
                    Alert.alert(
                        'Gagal',
                        error.response.data.message,
                    )
                } else {
                    Alert.alert(
                        'Gagal',
                        'Error')
                }
            })
    }

    const getHaji = () => {
        setIsLoading(true)
        axios
            .get(`${BASE_URL}/api/nouns/haji`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                // console.log(res.data.data)
                setListHaji(res.data.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                if (error.response) {
                    Alert.alert(
                        'Gagal',
                        error.response.data.message,
                    )
                } else {
                    Alert.alert(
                        'Gagal',
                        'Error')
                }
            })
    }

    const showNoun = (id) => {
        // console.log(id)
        setIsLoading(true)
        axios
            .get(`${BASE_URL}/api/nouns/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                setTempData(res.data.data)
                setIsLoading(false)
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                if (error.response) {
                    Alert.alert(
                        'Gagal',
                        error.response.data.message,
                    )
                } else {
                    Alert.alert(
                        'Gagal',
                        'Error')
                }
            })
    }

    const SendNoun = (form, navigation, nat) => {
        setIsLoading(true)
        axios
            .post(`${BASE_URL}/api/nouns`, form, {
                headers: {
                    'Content-Type': `multipart/form-data;`,
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(res => {
                console.log(res.data)
                setIsLoading(false)
                Alert.alert(
                    'Success',
                    'Berhasil menambahkan Data',
                )

                if (nat == 1) {
                    getHaji()
                } else {
                    getUmrah()
                }

                navigation.pop()
            })
            .catch(error => {
                console.log(error)
                setIsLoading(false)
                if (error.response) {
                    console.log(error.response.data.errors)
                    Alert.alert(
                        'Gagal',
                        error.response.data.message,
                    )
                } else {
                    Alert.alert(
                        'Gagal',
                        'Error')
                }
            })
    }



    return (
        <MainContext.Provider value={{
            SendNoun,
            getUmrah,
            getHaji,
            showNoun,
            listHaji,
            listUmrah,
            tempData,
        }}>
            {children}
        </MainContext.Provider>
    );
};
