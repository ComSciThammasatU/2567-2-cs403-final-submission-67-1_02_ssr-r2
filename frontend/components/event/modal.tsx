import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { Modal as RnModal, Portal, Button } from 'react-native-paper'
import Form from '@/components/event/form'
import Text from '@/components/ui/text'
import { useAppTheme } from '@/hooks/use-theme'
import CloseButton from '@/assets/icons/close-square'
import { checkBackstageRole } from '@/utils/check-user-role'

const Modal = () => {
    const isBackstage = checkBackstageRole()
    const theme = useAppTheme()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => setIsModalVisible(true)

    const confirmCloseModal = () => {
        Alert.alert('คำเตือน', 'คุณต้องการยกเลิกการสร้าง event หรือไม่', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK', onPress: () => setIsModalVisible(false) }
        ])
    }
    const closeModalImmediately = () => setIsModalVisible(false)

    return (
        <React.Fragment>
            <Portal>
                <RnModal
                    dismissable={false}
                    visible={isModalVisible}
                    onDismiss={confirmCloseModal}
                    contentContainerStyle={{
                        backgroundColor: 'white',
                        margin: 10,
                        height: '80%',
                    }}
                >
                    <CloseButton
                        onPress={confirmCloseModal}
                        style={{ alignSelf: 'flex-end' }}
                        width={60}
                        height={60}
                    />
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <ScrollView
                            keyboardShouldPersistTaps='handled'
                        >
                            <Form
                                closeModalImmediately={closeModalImmediately}
                            />
                        </ScrollView>
                    </KeyboardAvoidingView>
                </RnModal>
            </Portal>

            {isBackstage ?
                (
                    <Button
                        style={{
                            flex: 1,
                            position: 'absolute',
                            bottom: 10,
                            right: 5,
                            alignItems: 'center',
                            backgroundColor: theme.colors.mainButton,
                            borderRadius: 30,
                            height: 60,
                            width: 40,
                        }}
                        onPress={showModal}
                    >
                        <View
                            style={{
                                justifyContent: 'center',
                                height: '100%',
                            }}>


                            <Text
                                style={{
                                    fontSize: 40,
                                    lineHeight: 40,
                                    textAlignVertical: 'center',
                                    height: '100%',
                                }}>
                                +
                            </Text>
                        </View>
                    </Button>
                ) :
                null
            }


        </React.Fragment>
    )
}

export default Modal