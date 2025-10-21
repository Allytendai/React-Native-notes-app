import React, { useContext, useState} from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { NotesProvider, NotesContext } from './NotesContext';

const NotesScreen = () => {
  const { notes, addNote, deleteNote } = useContext(NotesContext)!;
  const [title, setTitle] = useState<any>('');
  const [content, setContent] = useState<any>('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" onChangeText={setTitle} style={{ borderBottomWidth: 1 }} />
      <TextInput placeholder="Content" onChangeText={setContent} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
      <Button title="Add Note" onPress={() => addNote(title, content)} />

      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default function App() {
  return (
    <NotesProvider>
      <NotesScreen />
    </NotesProvider>
  );
}
