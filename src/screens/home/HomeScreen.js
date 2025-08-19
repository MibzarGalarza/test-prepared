import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { getCharacter } from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';
import CardsUser from '../../components/CardsUser';
import LoadingAnimation from '../../animations/AnimationLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [characters, setCharacters] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getCharacter();

      setCharacters(data.results || []); // Assuming you want to set the results to a state variable
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simulate a delay for loading
    }
  }

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardsUser user={item} />
        )}
      />
    </View>
  )
}

export default HomeScreen