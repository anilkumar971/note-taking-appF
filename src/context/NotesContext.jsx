import React, { createContext, useState, useContext } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const updateNotes = (newNotes) => setNotes(newNotes);

  return (
    <NotesContext.Provider value={{ notes, updateNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
