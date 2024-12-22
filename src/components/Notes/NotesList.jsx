import React, { useEffect, useState } from 'react';
import { fetchNotes, deleteNote } from './NotesService';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    try {
      const response = await fetchNotes();
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      loadNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Your Notes
      </Typography>
      {notes.map((note) => (
        <Card key={note.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{note.title}</Typography>
            <Typography variant="body2">{note.content}</Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(note.id)}
              sx={{ marginTop: 1 }}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NotesList;
