import React, {useState} from 'react';
import {Text, Button, SafeAreaView, TextInput, ViewStyle} from 'react-native';

const initialState = {
  email: '',
  password: '',
  access: false,
};

const $root = {
  justifyContent: 'center',
  flex: 1,
  paddingHorizontal: 16,
} as ViewStyle;

function App() {
  const [state, setState] = useState(initialState);

  const onSignIn = () => {
    setState(p => ({
      ...p,
      access: p.email === 'test@test.com' && p.password === '123456',
    }));
  };

  if (!state.access) {
    return (
      <SafeAreaView style={$root}>
        <Text>Login</Text>
        <TextInput
          placeholder="Enter your email"
          onChangeText={email => setState(p => ({...p, email}))}
        />
        <TextInput
          placeholder="Enter your password"
          onChangeText={password => setState(p => ({...p, password}))}
        />
        <Button title="Sign in" onPress={onSignIn} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={$root}>
      <Text>Hi, {state.email}!</Text>
    </SafeAreaView>
  );
}

export default App;
