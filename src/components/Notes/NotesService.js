import { fetchNotes as fetchNotesApi, addNote as addNoteApi, updateNote as updateNoteApi, deleteNote as deleteNoteApi } from '../../api/notesApi';

export const fetchNotes = () => fetchNotesApi();
export const addNote = (note) => addNoteApi(note);
export const updateNote = (note) => updateNoteApi(note);
export const deleteNote = (id) => deleteNoteApi(id);

