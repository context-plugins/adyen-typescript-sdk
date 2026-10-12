import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringSchema, type Recurring } from "./recurring.js";

export type RecurringDetailsRequest = {
  /** The merchant account identifier you want to process the (transaction) request with. */
  merchantAccount: string;
  /**
   * A container for the type of a recurring contract to be retrieved.
   *
   * The contract value needs to match the contract value submitted in the payment transaction used
   * to create a recurring contract. However, if `ONECLICK,RECURRING` is the original contract
   * definition in the initial payment, then `contract` should take either `ONECLICK` or
   * `RECURRING`, depending on whether or not you want the shopper to enter their card's security
   * code when they finalize their purchase.
   */
  recurring?: Recurring;
  /** The reference you use to uniquely identify the shopper (e.g. user ID or account ID). */
  shopperReference: string;
};

export const recurringDetailsRequestSchema: Schema<RecurringDetailsRequest> =
  s.object<RecurringDetailsRequest>({
    merchantAccount: s.string(),
    recurring: s.optional(s.lazy(() => recurringSchema)),
    shopperReference: s.string(),
  });
