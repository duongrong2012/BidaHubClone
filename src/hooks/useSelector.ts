import { ReduxState } from "@/redux/store";
import { useSelector as reduxUseSelector } from "react-redux";

const useSelector = reduxUseSelector<ReduxState>;

export default useSelector;
