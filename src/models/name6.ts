import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name6 = {
  /**
   * Set to **requested** to request a [name
   * validation](https://docs.adyen.com/payment-methods/cards/name-validation) to verify if the
   * cardholder name provided by the shopper matches the cardholder name on file at the issuing
   * bank.
   */
  status: string;
};

export const name6Schema: Schema<Name6> = s.object<Name6>({
  status: s.string(),
});
