import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type ForexQuote1 = {
  /** The account name. */
  account?: string;
  /** The account type. */
  accountType?: string;
  /** The base amount. */
  baseAmount?: Amount;
  /** The base points. */
  basePoints: number;
  /** The buy rate. */
  buy?: Amount;
  /** The interbank amount. */
  interbank?: Amount;
  /** The reference assigned to the forex quote request. */
  reference?: string;
  /** The sell rate. */
  sell?: Amount;
  /** The signature to validate the integrity. */
  signature?: string;
  /** The source of the forex quote. */
  source?: string;
  /** The type of forex. */
  type?: string;
  /** The date until which the forex quote is valid. */
  validTill: Date;
};

export const forexQuote1Schema: Schema<ForexQuote1> = s.object<ForexQuote1>({
  account: s.optional(s.string()),
  accountType: s.optional(s.string()),
  baseAmount: s.optional(s.lazy(() => amountSchema)),
  basePoints: s.int(),
  buy: s.optional(s.lazy(() => amountSchema)),
  interbank: s.optional(s.lazy(() => amountSchema)),
  reference: s.optional(s.string()),
  sell: s.optional(s.lazy(() => amountSchema)),
  signature: s.optional(s.string()),
  source: s.optional(s.string()),
  type: s.optional(s.string()),
  validTill: s.dateTime(),
});
