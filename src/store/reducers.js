const initialState = {
  persons: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_PERSON":
      return {
        ...state,
        persons: [
          ...state.persons,
          {
            id: Math.random(),
            name: "Max",
            age: Math.floor(Math.random() * 40),
          },
        ],
      }
    case "DELETE_PERSON":
      return {
        ...state,
        persons: state.persons.filter((person) => person.id !== action.id),
      }
  }

  return state
}

export default reducer
