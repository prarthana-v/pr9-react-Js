let intialState = {
  notes: JSON.parse(localStorage.getItem("record"))
    ? JSON.parse(localStorage.getItem("record"))
    : [],
};
const NoteReducers = (state = intialState, action) => {
  switch (action.type) {
    case "add":
      let oldRecord = [...state.notes, action.payload];
      localStorage.setItem("record", JSON.stringify(oldRecord));
      // console.log(oldRecord);
      return {
        ...state,
        notes: oldRecord,
      };

    case "delete":
      console.log(action.payload);
      let newRecord = state.notes.filter((task) => task.id != action.payload);
      // console.log(newRecord);
      localStorage.setItem("record", JSON.stringify(newRecord));
      return {
        ...state,
        notes: newRecord,
      };

    default:
      return state;
  }
};

export default NoteReducers;
