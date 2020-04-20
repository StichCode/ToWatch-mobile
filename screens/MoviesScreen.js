import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Picker, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import rook from '../assets/images/rook.png';


export default function MoviesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{flexDirection:"row", padding: 10, marginLeft: '7%'}}>
        <TouchableOpacity style={styles.cartFilm}>
              <View style={styles.movieBlock}>
                  <Image source={rook} style={{width: 105, height: 145, marginLeft: 20, marginTop: '5%', borderRadius: 10}}/>
                  <View style={styles.movieBblock}>
                    <Text style={{marginTop: '5%', fontSize: 15, marginLeft: 10,}}>Ладья 2019</Text>
                    <View style={{marginLeft: 10, marginTop: 5, backgroundColor: 'cyan', width: 80, borderRadius: 10}}>
                      <Text style={{margin: '1%', marginLeft: 10 }}>
                        Сериал
                      </Text>
                    </View>
                  </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartFilm} >
              <View style={styles.movieBlock}>
                  <Image source={rook} style={{width: 105, height: 145, marginLeft: 20, marginTop: '5%', borderRadius: 10}}/>
                  <View style={styles.movieBblock}>
                    <Text style={{marginTop: '5%', fontSize: 15, marginLeft: 10,}}>Ладья 2019</Text>
                    <View style={{marginLeft: 10, marginTop: 5, backgroundColor: 'cyan', width: 80, borderRadius: 10}}>
                      <Text style={{margin: '1%', marginLeft: 10 }}>
                        Сериал
                      </Text>
                    </View>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", padding: 10, marginLeft: '7%'}}>
        <TouchableOpacity style={styles.cartFilm}>
              <View style={styles.movieBlock}>
                  <Image source={rook} style={{width: 105, height: 145, marginLeft: 20, marginTop: '5%', borderRadius: 10}}/>
                  <View style={styles.movieBblock}>
                    <Text style={{marginTop: '5%', fontSize: 15, marginLeft: 10,}}>Ладья 2019</Text>
                    <View style={{marginLeft: 10, marginTop: 5, backgroundColor: 'cyan', width: 80, borderRadius: 10}}>
                      <Text style={{margin: '1%', marginLeft: 10 }}>
                        Сериал
                      </Text>
                    </View>
                  </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartFilm}>
              <View style={styles.movieBlock}>
                  <Image source={rook} style={{width: 105, height: 145, marginLeft: 20, marginTop: '5%', borderRadius: 10}}/>
                  <View style={styles.movieBblock}>
                    <Text style={{marginTop: '5%', fontSize: 15, marginLeft: 10,}}>Ладья 2019</Text>
                    <View style={{marginLeft: 10, marginTop: 5, backgroundColor: 'cyan', width: 80, borderRadius: 10}}>
                      <Text style={{margin: '1%', marginLeft: 10 }}>
                        Сериал
                      </Text>
                    </View>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", padding: 10, marginLeft: '7%'}}>
        <TouchableOpacity style={styles.cartFilm}>
              <View style={styles.movieBlock}>
                  <Image source={rook} style={{width: 105, height: 145, marginLeft: 20, marginTop: '5%', borderRadius: 10}}/>
                  <View style={styles.movieBblock}>
                    <Text style={{marginTop: '5%', fontSize: 15, marginLeft: 10,}}>Ладья 2019</Text>
                    <View style={{marginLeft: 10, marginTop: 5, backgroundColor: 'cyan', width: 80, borderRadius: 10}}>
                      <Text style={{margin: '1%', marginLeft: 10 }}>
                        Сериал
                      </Text>
                    </View>
                  </View>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartFilm}>
              <View style={styles.movieBlock}>
                  <Image source={rook} style={{width: 105, height: 145, marginLeft: 20, marginTop: '5%', borderRadius: 10}}/>
                  <View style={styles.movieBblock}>
                    <Text style={{marginTop: '5%', fontSize: 15, marginLeft: 10,}}>Ладья 2019</Text>
                    <View style={{marginLeft: 10, marginTop: 5, backgroundColor: 'cyan', width: 80, borderRadius: 10}}>
                      <Text style={{margin: '1%', marginLeft: 10 }}>
                        Сериал
                      </Text>
                    </View>
                  </View>
              </View>
          </TouchableOpacity>
        </View>
          
        
        
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  movieBlock: {
    flex: 1,
    flexDirection: 'column',
  },
  picture: {
    width: 105,
    height: 105,
    borderRadius: 200,
    marginLeft: 20,
    marginTop: '5%',
  },
  movieBblock: {
    flex: 1,
    flexDirection: 'column',
  },

  cartFilm: {
      borderWidth: 0,
      borderRadius: 50,
      borderColor: (255,255,255),
      margin: 10,
      height: 200,
      width: 150,
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
    paddingTop: 30,
  },
  
});
