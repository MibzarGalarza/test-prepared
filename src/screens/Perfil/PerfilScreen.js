import { View, Text } from 'react-native'
import React from 'react'
import useGlobalState from '../../store/auth'
import globalStyles from '../../styles/globalStyles';

const PerfilScreen = () => {
  const { user } = useGlobalState();

  return (
    <View style={globalStyles.card}>
      <View>
        <Text style={globalStyles.normal}>{user?.email}</Text>
        <Text style={globalStyles.normal}>{user?.password}</Text>
      </View>
    </View>
  )
}

export default PerfilScreen