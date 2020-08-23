import { LoadCurrenciesAction, LOAD_CURRENCIES } from "./Types";

export function loadCurrencies(): LoadCurrenciesAction {
  return {
    type: LOAD_CURRENCIES,
    meta: {}
  };
}
