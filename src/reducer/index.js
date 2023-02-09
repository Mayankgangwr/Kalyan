import SpData from "./spdata";
import DpData from "./dpdata";
import TpData from "./tpdata";
import SingleData from "./single";
import OpenSpData from "./openspdata";
import OpenTpData from "./opentpdata";
import OpenSingleData from "./opensingle";
import OpenDpData from "./opendp";
import JodeData from "./jode";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  SpData,
  DpData,
  TpData,
  SingleData,
  OpenSpData,
  OpenDpData,
  OpenTpData,
  OpenSingleData,
  JodeData,
});
export default rootReducer;
