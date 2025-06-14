import { View } from 'react-native'
import React from 'react'
import FormController from '@/components/ui/form-controller'
import Button from '@/components/ui/button'
import { Control, FieldValues, Path } from 'react-hook-form'
import { checkBackstageRole } from '@/utils/check-user-role'
import {  useRouter } from 'expo-router'
import { useEventDataStore } from '@/zustand/store'

type TotalPlayerInputPropsType<T extends FieldValues> = {
  label: string
  name: Path<T>
  control: Control<T>
  isCreateMode: boolean
  playerType: string
  rules: any
}

const TotalPlayerInput = <T extends FieldValues>({
  label, rules, control, name, isCreateMode, playerType
}: TotalPlayerInputPropsType<T>) => {
  const isBackstage = checkBackstageRole()
  const router = useRouter()
  const { setPlayerType } = useEventDataStore()
  
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <FormController
        label={label}
        keyboardType='numeric'
        rules={rules}
        editable={isBackstage}
        style={{ minWidth: 170 }}
        control={control}
        name={name}
        defaultValue={0}
      />
      {isCreateMode ? null :
        <Button onPress={() => {
          setPlayerType(playerType)
          router.navigate('/song/assign-player')}
          }>
          ดูข้อมูล
        </Button>}

    </View>
  )
}

export default TotalPlayerInput