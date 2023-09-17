import React, { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../Config/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(false);
    const [IsAlert, setIsAlert] = useState(null);

    const hideAlert = () => {
        setIsAlert(null);
        console.log("Tombol OK ditekan. Menutup modal.");
    };

    const login = (username, password) => {
        setIsLoading(true);
        axios
            .post(`${BASE_URL}/login`, {
                email_or_username: username,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
                    .then(() => {
                        setIsLoading(false);
                        setIsLogin(true);
                        const token = userInfo.data.authorization.token;
                        setToken(token)
                    })
                    .catch(error => {
                        setIsLogin(false)
                        setIsLoading(false);
                        console.log(`Error saving userInfo to AsyncStorage: ${error}`);
                    });
            })
            .catch(error => {
                setIsLoading(false);
                AsyncStorage.removeItem('isIn')
                if (error.response) {
                    // Request was made and server responded with a status code outside the range of 2xx
                    console.log(error.response.data.message);
                    setIsAlert('Masukan Username / Password yang benar!');
                } else if (error.request) {
                    // Request was made but no response was received
                    console.log('No response received');
                } else {
                    // Something happened in setting up the request
                    console.log('Error while setting up the request', error.message);
                }
            });
    };

    const logout = async () => {
        setIsLoading(true);
        const user = await AsyncStorage.getItem('userInfo');
        if (!user) {
            setIsLoading(false);
            AsyncStorage.removeItem('userInfo');
        } else {
            axios
                .post(`${BASE_URL}/logout`, null, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => {
                    console.log('berhasil')
                    AsyncStorage.removeItem('userInfo');
                    setIsLoading(false);
                    setIsLogin(false);
                })
                .catch(error => {
                    setIsLoading(false);
                    setIsLogin(true);

                    if (error.response) {
                        // Request was made and server responded with a status code outside the range of 2xx
                        console.log(error);
                    } else if (error.request) {
                        // Request was made but no response was received
                        console.log('No response received');
                    } else {
                        // Something happened in setting up the request
                        console.log('Error while setting up the request', error.message);
                    }
                });

        }
    };


    return (
        <AuthContext.Provider value={{
            isLoading,
            isLogin,
            token,
            userInfo,
            IsAlert,
            setIsAlert,
            setUserInfo,
            login,
            logout,
            setIsLoading,
            setIsLogin,
            setToken,
            hideAlert,
        }}>
            {children}
        </AuthContext.Provider >
    );
};
