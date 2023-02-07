import SpData from "./spdata";
import DpData from "./dpdata";
import TpData from "./tpdata";
import SingleData from "./single";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  SpData,
  DpData,
  TpData,
  SingleData,
});
export default rootReducer;
