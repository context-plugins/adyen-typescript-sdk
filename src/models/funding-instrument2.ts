import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardIdentification2Schema, type CardIdentification2 } from "./card-identification2.js";
import { sourceOfFundsSchema, type SourceOfFunds } from "./source-of-funds.js";

export type FundingInstrument2 = {
  cardIdentification?: CardIdentification2;
  networkPaymentReference?: string;
  reference?: string;
  sourceOfFunds?: SourceOfFunds;
};

export const fundingInstrument2Schema: Schema<FundingInstrument2> = s.object<FundingInstrument2>({
  cardIdentification: s.optional(s.lazy(() => cardIdentification2Schema)),
  networkPaymentReference: s.optional(s.string()),
  reference: s.optional(s.string()),
  sourceOfFunds: s.optional(s.lazy(() => sourceOfFundsSchema)),
});
