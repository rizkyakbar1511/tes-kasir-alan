import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.textLogo}>
        <Text style={styles.innerText1}>Alan</Text>{' '}
        <Text style={styles.innerText2}>Resto</Text>
      </Text>
      <Text style={styles.subLogo}>pick your favorite dishes</Text>
      <TouchableOpacity
        style={styles.btnStart}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#133b5c',
    color: '#f4f9f4',
  },
  textLogo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 70,
  },
  subLogo: {
    fontStyle: 'italic',
    color: '#f4f9f4',
  },
  innerText1: {
    color: '#f4f9f4',
  },
  innerText2: {
    color: '#fddb3a',
  },
  btnStart: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#de7119',
    elevation: 5,
    marginTop: 80,
    borderRadius: 3,
  },
  btnText: {
    color: '#f4f9f4',
    fontSize: 15,
  },
});
