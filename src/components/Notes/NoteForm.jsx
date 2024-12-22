import React, { useState } from 'react';
import { addNote } from './NotesService';
import { TextField, Button, Box, Typography } from '@mui/material';

const NoteForm = ({ refreshNotes }) => {
  const [formData, setFormData] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNote(formData);
      refreshNotes();
      setFormData({ title: '', content: '' });
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Add a New Note
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Note
        </Button>
      </form>
    </Box>
  );
};

export default NoteForm;
