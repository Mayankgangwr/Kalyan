import SpData from "./spdata";
import DpData from "./dpdata";
import TpData from "./tpdata";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  SpData,
  DpData,
  TpData,
});
export default rootReducer;
