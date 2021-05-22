import * as types from "./actionType";

const reducer = (
  state = { previousSemester: [], thisSemester: [], duplicates: [] },
  action
) => {
  switch (action.type) {
    case types.CHANGE_PREVIOUS_SEMESTER:
      return {
        ...state,
        previousSemester: action.data,
      };
    case types.CHANGE_THIS_SEMESTER:
      return {
        ...state,
        thisSemester: action.data,
      };
    case types.CHANGE_DUPLICATES:
      return {
        ...state,
        duplicates: action.data,
      };
    default:
      return state;
  }
};
export default reducer;
