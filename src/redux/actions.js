import * as types from "./actionType";

export function changePreviousSemester(data) {
  return {
    type: types.CHANGE_PREVIOUS_SEMESTER,
    data: data,
  };
}
export function changeThisSemester(data) {
  return {
    type: types.CHANGE_THIS_SEMESTER,
    data: data,
  };
}
export function changeDuplicates(data) {
  return {
    type: types.CHANGE_DUPLICATES,
    data: data,
  };
}
