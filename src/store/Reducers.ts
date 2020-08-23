import { initialAppState, AppState } from "./State";
import {
  MetaActionType,
  LOAD_CURRENCIES,
  LOAD_CURRENCIES_FAIL,
  LOAD_CURRENCIES_SUCCESS
} from "./Types";
import * as O from "fp-ts/lib/Option";
import * as E from "fp-ts/lib/Either";

export function appReducer(
  state = initialAppState,
  action: MetaActionType
): AppState {
  switch (action.type) {
    case LOAD_CURRENCIES:
      return {
        ...state
      };
    case LOAD_CURRENCIES_FAIL:
      return {
        ...state,
        currencies: O.some(E.left(action.meta.error))
      };
    case LOAD_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: O.some(E.right(action.meta.currencies))
      };
    default:
      return state;
  }
}
