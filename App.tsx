import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Svg, Circle} from 'react-native-svg';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import {getUniqueId} from 'react-native-device-info';
import {Picker} from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Lottie from 'lottie-react-native';
import PagerView from 'react-native-pager-view';
import * as RNLocalize from 'react-native-localize';
import {launchCamera} from 'react-native-image-picker';
import MaskedView from '@react-native-masked-view/masked-view';

AsyncStorage.setItem('@storage_Key', 'value');
NetInfo.fetch().then(state => {
  console.log('Connection type', state.type);
  console.log('Is connected?', state.isConnected);
});


getUniqueId();
console.log(RNLocalize.getLocales());
console.log(RNLocalize.getCurrencies());

function HomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: console.log,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <PagerView style={styles.root} initialPage={0}>
      <View key="1">
        <View style={styles.root}>
          <Text>Home Screen222</Text>
          <Lottie source={require('./a.json')} autoPlay loop />
          <Svg height="100" width="140">
            <Circle cx="50%" cy="50%" r="40%" fill="pink" />
          </Svg>
          <Button onPress={showDatepicker} title="Show date picker!" />
          <Button
            onPress={() => launchCamera({mediaType: 'photo'})}
            title="launchCamera"
          />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={itemValue => setSelectedLanguage(itemValue)}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.box}>
            <Text>Sign in with Facebook</Text>
          </LinearGradient>
        </View>
      </View>
      <View key="2">
        <MaskedView
          style={{flex: 1, flexDirection: 'row', height: '100%'}}
          maskElement={
            <View
              style={{
                // Transparent background because mask is based off alpha channel.
                backgroundColor: 'transparent',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 60,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Basic Mask
              </Text>
            </View>
          }>
          {/* Shows behind the mask, you can put anything here, such as an image */}
          <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}} />
          <View style={{flex: 1, height: '100%', backgroundColor: '#e1e1e1'}} />
        </MaskedView>
      </View>
      <View key="3">
        <WebView source={{uri: 'https://infinite.red'}} style={styles.web} />
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  web: {
    marginTop: 20,
    width: 100,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
