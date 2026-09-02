import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount3Schema, type Amount3 } from "./amount3.js";
import { amount4Schema, type Amount4 } from "./amount4.js";
import { amount5Schema, type Amount5 } from "./amount5.js";
import { amount6Schema, type Amount6 } from "./amount6.js";

export type ForexQuote = {
  account?: string;
  accountType?: string;
  baseAmount?: Amount3;
  basePoints: number;
  buy?: Amount4;
  interbank?: Amount5;
  reference?: string;
  sell?: Amount6;
  signature?: string;
  source?: string;
  type?: string;
  validTill: Date;
};

export const forexQuoteSchema: Schema<ForexQuote> = s.object<ForexQuote>({
  account: s.optional(s.string()),
  accountType: s.optional(s.string()),
  baseAmount: s.optional(s.lazy(() => amount3Schema)),
  basePoints: s.number(),
  buy: s.optional(s.lazy(() => amount4Schema)),
  interbank: s.optional(s.lazy(() => amount5Schema)),
  reference: s.optional(s.string()),
  sell: s.optional(s.lazy(() => amount6Schema)),
  signature: s.optional(s.string()),
  source: s.optional(s.string()),
  type: s.optional(s.string()),
  validTill: s.dateTime(),
});
