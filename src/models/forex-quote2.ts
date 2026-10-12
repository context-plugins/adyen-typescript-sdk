import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount3Schema, type Amount3 } from "./amount3.js";
import { amount4Schema, type Amount4 } from "./amount4.js";
import { amount5Schema, type Amount5 } from "./amount5.js";
import { amount6Schema, type Amount6 } from "./amount6.js";

/** The forex quote as returned in the response of the forex service. */
export type ForexQuote2 = {
  /** The account name. */
  account?: string;
  /** The account type. */
  accountType?: string;
  /** The base amount. */
  baseAmount?: Amount3;
  /** The base points. */
  basePoints: number;
  /** The buy rate. */
  buy?: Amount4;
  /** The interbank amount. */
  interbank?: Amount5;
  /** The reference assigned to the forex quote request. */
  reference?: string;
  /** The sell rate. */
  sell?: Amount6;
  /** The signature to validate the integrity. */
  signature?: string;
  /** The source of the forex quote. */
  source?: string;
  /** The type of forex. */
  type?: string;
  /** The date until which the forex quote is valid. */
  validTill: Date;
};

export const forexQuote2Schema: Schema<ForexQuote2> = s.object<ForexQuote2>({
  account: s.optional(s.string()),
  accountType: s.optional(s.string()),
  baseAmount: s.optional(s.lazy(() => amount3Schema)),
  basePoints: s.int(),
  buy: s.optional(s.lazy(() => amount4Schema)),
  interbank: s.optional(s.lazy(() => amount5Schema)),
  reference: s.optional(s.string()),
  sell: s.optional(s.lazy(() => amount6Schema)),
  signature: s.optional(s.string()),
  source: s.optional(s.string()),
  type: s.optional(s.string()),
  validTill: s.dateTime(),
});
