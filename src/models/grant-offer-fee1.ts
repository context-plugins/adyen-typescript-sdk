import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

/** Contains information about the fee that your user would pay for the grant. */
export type GrantOfferFee1 = {
  /** Contains the amount of the offer fee. */
  amount: Amount17;
  /**
   * Annual Percentage Rate (APR) of the offer. The percentage is expressed in [basis
   * points](https://www.investopedia.com/terms/b/basispoint.asp).
   */
  aprBasisPoints?: number;
};

export const grantOfferFee1Schema: Schema<GrantOfferFee1> = s.object<GrantOfferFee1>({
  amount: amount17Schema,
  aprBasisPoints: s.optional(s.int()),
});
