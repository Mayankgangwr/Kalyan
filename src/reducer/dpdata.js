var initialState = [
  { key: "111", num: 0 },
  { key: "222", num: 0 },
  { key: "333", num: 0 },
  { key: "444", num: 0 },
];
const DpData = (state = initialState, action) => {
  if (action.type == "AddDp") {
    return action.payload;
  } else {
    return state;
  }
};
export default DpData;
