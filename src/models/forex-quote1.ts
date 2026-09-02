import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type ForexQuote1 = {
  account?: string;
  accountType?: string;
  baseAmount?: Amount;
  basePoints: number;
  buy?: Amount;
  interbank?: Amount;
  reference?: string;
  sell?: Amount;
  signature?: string;
  source?: string;
  type?: string;
  validTill: Date;
};

export const forexQuote1Schema: Schema<ForexQuote1> = s.object<ForexQuote1>({
  account: s.optional(s.string()),
  accountType: s.optional(s.string()),
  baseAmount: s.optional(s.lazy(() => amountSchema)),
  basePoints: s.number(),
  buy: s.optional(s.lazy(() => amountSchema)),
  interbank: s.optional(s.lazy(() => amountSchema)),
  reference: s.optional(s.string()),
  sell: s.optional(s.lazy(() => amountSchema)),
  signature: s.optional(s.string()),
  source: s.optional(s.string()),
  type: s.optional(s.string()),
  validTill: s.dateTime(),
});
