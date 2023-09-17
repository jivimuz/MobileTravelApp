import { View, Text } from 'react-native'
import React from 'react'
import { Alert, HStack, Toast, VStack } from 'native-base'



const Toaster = ({ text }) => {
    return (
        <View onLayout={() => Toast.show({
            placement: "top",
            render: () => {
                return <Alert maxWidth="90%" alignSelf="center" borderRadius={20} flexDirection="row" status={"info"} variant={'left-accent'}>
                    <VStack space={1} flexShrink={1} w="90%">
                        <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
                            <HStack space={2} flexShrink={1} alignItems="center">
                                <Alert.Icon />
                                <Text style={{ color: 'black' }}>
                                    {text}
                                </Text>
                            </HStack>
                        </HStack>

                    </VStack>
                </Alert>;
            }
        })} />
    )
}

export default Toaster