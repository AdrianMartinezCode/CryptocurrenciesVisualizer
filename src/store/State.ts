import { Currency } from "../models/Currency";
import { Either } from "fp-ts/lib/Either";
import { Option } from "fp-ts/lib/Option";
import * as O from "fp-ts/lib/Option";

export type AppState = {
  apiKey: string;
  currencies: Option<Either<Error, Currency[]>>;
};

export const initialAppState = {
  apiKey: "XXXXX",
  currencies: O.none
};
