import * as React from 'react';
import { Image, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const DATA = [
  {
    id:         '1',
    title:      'Ладья',
    imagePath:  require('../assets/images/rook.png'),
    tag:        'Сериал',
  },
  {
    id:         '2',
    title:      'Побег из Шоушенка',
    imagePath:  require('../assets/images/run.png'),
    tag:        'Фильм',
  },
  {
    id:         '3',
    title:      'Зеленая миля',
    imagePath:  require('../assets/images/mile.png'),
    tag:        'Фильм',
  },
  {
    id:         '4',
    title:      'Форрест Гамп',
    imagePath:  require('../assets/images/gamp.png'),
    tag:        'Фильм',
  },
  {
    id:         '5',
    title:      '1+1',
    imagePath:  require('../assets/images/oneplus.png'),
    tag:        'Фильм',
  },
  
];

const colorTag = {
  'Фильм': 'yellow',
  'Сериал': 'cyan',
  'Мультфильм': 'green'
};



function Record({ id, title, im, tag}) {
  return (
    <TouchableOpacity style={styles.cartFilm}>
      <View style={{flex: 1, flexDirection: 'column'}}>
          <Image source={im} style={styles.picture}/>
          <View style={styles.movieBblock}>
            <Text style={styles.titleMovie}>{title}</Text>
            <View style={{backgroundColor: colorTag[tag], marginLeft: 30, marginTop: 5, width: 80, borderRadius: 10}}>
              <Text style={{margin: '1%', marginLeft: 10}}>
                {tag}
              </Text>
            </View>
          </View>
      </View>
    </TouchableOpacity>
  );
}



export default function MoviesScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={DATA}
      renderItem={({item}) => 
        <Record
          id ={item.id}
          title={item.title}
          im={item.imagePath}
          tag={item.tag}
        />
      }
      keyExtractor={item => item.id}
      numColumns={'2'}
      />
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  cartFilm: {
    borderWidth: 0,
    borderRadius: 50,
    borderColor: (0,255,255),
    margin: 5,
    marginLeft: 15
  },

  movieBlock: {
    flex: 1,
    flexDirection: 'column',
  },

  titleMovie: {
    marginTop: 5, 
    fontSize: 15, 
    marginLeft: 30,
  },

  picture: {
    width: 135, 
    height: 175, 
    marginLeft: 10, 
    marginTop: 10, 
    borderRadius: 10
  },

  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },

  movieBblock: {
    flex: 1,
    flexDirection: 'column',
  },

  cartText: {
      margin: 1,
      marginLeft: 10,
      fontSize: 15,
      color: (255,255,255),
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    paddingTop: 20,
  },

});
