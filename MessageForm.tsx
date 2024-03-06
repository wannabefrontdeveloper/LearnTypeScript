import React,{useRef, useState} from 'react';
import {Button, Text, TextInput, View } from 'react-native';

function MessageForm() {
  const [text,setText] = useState<string>('');
  const [lastMessage, setLastMessage] = useState<{
    id: number;
    message: string,
    date: Date;
  } | null>(null);
  const nextId = useRef<number>(1);

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
      id: nextId.current,
    });
    setText('');
    nextId.current += 1;
  }
  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="PRESS ME" onPress={onPress} />
      {lastMessage && (
        <View>
          <Text>
            마지막 메시지: {lastMessage.message} (
              {lastMessage.date.toLocaleString()})
          </Text>
          </View>
      )}
    </View>
  )
}

export default MessageForm;