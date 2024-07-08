export const addNote = (note) => {
  console.log(note);
  return {
    type: "add",
    payload: note,
  };
};

export const deleteNote = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};
