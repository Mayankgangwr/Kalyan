var initialState = [
  { key: "1", num: 0 },
  { key: "2", num: 0 },
  { key: "3", num: 0 },
  { key: "4", num: 0 },
  { key: "5", num: 0 },
  { key: "6", num: 0 },
  { key: "7", num: 0 },
  { key: "8", num: 0 },
  { key: "9", num: 0 },
  { key: "0", num: 0 },
  { key: "na", num: 0 },
  { key: "no", num: 0 },
];
const SingleData = (state = initialState, action) => {
  if (action.type == "AddSingle") {
    return action.payload;
  } else {
    return state;
  }
};
export default SingleData;
