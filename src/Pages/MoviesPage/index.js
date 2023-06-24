import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Filme from '../../components/Filme';

export default function MoviesPage(){
    let [filmes, setFilmes] = useState([])

  const apiUrl = 'https://api.otaviolube.com/api/filmes?populate=*'

  useEffect(function(){
    fetch(apiUrl)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto)
        setFilmes(objeto.data)
      })
  }, []);
    return(
        <SafeAreaView style={styles.container}>
        { filmes.length > 0 ? 
        <ScrollView> 
          {filmes.map(filme => <Filme key={filme.id} filme={filme.attributes}/>)}
        </ScrollView>
         :  <ActivityIndicator size={'large'}/>}
        <StatusBar style="auto" />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });