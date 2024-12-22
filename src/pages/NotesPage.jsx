import React, { useState } from 'react';
import NotesList from '../components/Notes/NotesList';
import NoteForm from '../components/Notes/NoteForm';
import { Box } from '@mui/material';

const NotesPage = () => {
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => setRefresh((prev) => !prev);

  return (
    <Box sx={{ padding: 4 }}>
      <NoteForm refreshNotes={toggleRefresh} />
      <NotesList key={refresh} />
    </Box>
  );
};

export default NotesPage;
