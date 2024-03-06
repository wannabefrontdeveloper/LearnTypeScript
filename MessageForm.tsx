import React,{useState} from 'react';
import { TextInput, View } from 'react-native';

function MessageForm() {
  const [text,setText] = useState<string>('');
  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
    </View>
  )
}

export default MessageForm;