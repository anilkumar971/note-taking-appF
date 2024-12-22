/*import apiClient from './apiClient';

export const fetchNotes = () => apiClient.get('/notes');

export const addNote = (note) => apiClient.post('/notes', note);

export const updateNote = (id, note) => apiClient.put(`/notes/${id}`, note);

export const deleteNote = (id) => apiClient.delete(`/notes/${id}`);*/

import apiClient from './apiClient';

export const fetchNotes = async () => {
  try {
    return await apiClient.get('/notes');
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  }
};

export const addNote = async (note) => {
  try {
    return await apiClient.post('/notes', note);
  } catch (error) {
    console.error('Error adding note:', error);
    throw error;
  }
};

export const updateNote = async (id, note) => {
  try {
    return await apiClient.put(`/notes/${id}`, note);
  } catch (error) {
    console.error('Error updating note:', error);
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    return await apiClient.delete(`/notes/${id}`);
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  }
};
