var initialState = [
  { key: "111", num: 0 },
  { key: "222", num: 0 },
  { key: "333", num: 0 },
  { key: "444", num: 0 },
  { key: "555", num: 0 },
  { key: "666", num: 0 },
  { key: "777", num: 0 },
  { key: "888", num: 0 },
  { key: "999", num: 0 },
  { key: "000", num: 0 },
  { key: "na", num: 0 },
  { key: "no", num: 0 },
];
const OpenTpData = (state = initialState, action) => {
  if (action.type == "AddOpenTp") {
    return action.payload;
  } else {
    return state;
  }
};
export default OpenTpData;
