import React, { createContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NotesContextType {
  notes: any[];
  addNote: (title: any, content: any) => void;
  deleteNote: (id: any) => void;
}

interface NotesProviderProps {
  children: ReactNode;
}


export const NotesContext = createContext<NotesContextType | null>(null);

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<any[]>([]);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes) setNotes(JSON.parse(storedNotes));
    } catch (error) {
      console.error('Failed to load notes', error);
    }
  };

  const saveNotes = async (updatedNotes: any[]) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Failed to save notes', error);
    }
  };

  const addNote = (title: any, content: any) => {  // Also corrected parameter types
    if (!title || !content) return;
    const newNote = { id: Date.now(), title, content };
    saveNotes([...notes, newNote]);
  };

  const deleteNote = (id: any) => {  // Corrected id type
    const filteredNotes = notes.filter(note => note.id !== id);
    saveNotes(filteredNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
