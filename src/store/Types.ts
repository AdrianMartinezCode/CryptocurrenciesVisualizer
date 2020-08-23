import { Currency } from "../models/Currency";

export const LOAD_CURRENCIES = "Load Currencies";
export const LOAD_CURRENCIES_SUCCESS = "Load Currencies Success";
export const LOAD_CURRENCIES_FAIL = "Load Currencies Fail";

export type LoadCurrenciesAction = {
  type: typeof LOAD_CURRENCIES;
  meta: {};
};

export type LoadCurrenciesFailAction = {
  type: typeof LOAD_CURRENCIES_FAIL;
  meta: {
    error: Error;
  };
};

export type LoadCurrenciesSuccessAction = {
  type: typeof LOAD_CURRENCIES_SUCCESS;
  meta: {
    currencies: Currency[];
  };
};

export type MetaActionType =
  | LoadCurrenciesAction
  | LoadCurrenciesFailAction
  | LoadCurrenciesSuccessAction;
