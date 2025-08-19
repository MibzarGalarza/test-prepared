import React from 'react'
import { View, Text, Image } from 'react-native'
import globalStyles from '../styles/globalStyles';
import { formatDate } from '../utils/formatDate';

const CardsUser = ({ user }) => {

  const { name, status, image, created } = user;

  return (
    <View style={globalStyles.card}>
      <Image
        source={{ uri: image }}
        style={globalStyles.image}
        resizeMode="contain"
      />
      <View>
        <Text style={globalStyles.normal}>{name}</Text>
        <Text style={globalStyles.normal}>{status}</Text>
        <Text style={globalStyles.normal}>{formatDate(created)}</Text>
      </View>
    </View>
  )
}

export default CardsUser;