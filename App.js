/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useCallback, useRef} from 'react';
import {Button, SafeAreaView, StatusBar, TextInput} from 'react-native';

const App: () => React$Node = () => {
  const textInputRef = useRef<typeof TextInput | null>(null);
  const focusTextInput = useCallback(() => {
    console.log(textInputRef.current);
    if (textInputRef.current != null) {
      textInputRef.current.focus();
    }
  }, [textInputRef]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput ref={textInputRef} />
        <Button onPress={focusTextInput} title="Focus input" />
      </SafeAreaView>
    </>
  );
};

export default App;
