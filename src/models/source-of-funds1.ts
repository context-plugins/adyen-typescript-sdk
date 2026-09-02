import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { financierSchema, type Financier } from "./financier.js";
import { patchableAmountDtoSchema, type PatchableAmountDto } from "./patchable-amount-dto.js";
import { type214Schema, type Type214 } from "./type214.js";

export type SourceOfFunds1 = {
  adyenProcessedFunds: boolean;
  amount?: PatchableAmountDto;
  assetMonthsHeld?: number;
  cryptocurrencyExchange?: string;
  dateOfFundsReceived?: string;
  dateOfSourceEvent?: string;
  description?: string;
  financiers?: Financier[];
  originatorLegalEntityId?: string;
  purpose?: string;
  relationship?: string;
  type?: Type214;
  website?: string;
};

export const sourceOfFunds1Schema: Schema<SourceOfFunds1> = s.object<SourceOfFunds1>({
  adyenProcessedFunds: s.boolean(),
  amount: s.optional(s.lazy(() => patchableAmountDtoSchema)),
  assetMonthsHeld: s.optional(s.number()),
  cryptocurrencyExchange: s.optional(s.string()),
  dateOfFundsReceived: s.optional(s.dateOnly()),
  dateOfSourceEvent: s.optional(s.dateOnly()),
  description: s.optional(s.string()),
  financiers: s.optional(s.array(s.lazy(() => financierSchema))),
  originatorLegalEntityId: s.optional(s.string()),
  purpose: s.optional(s.string()),
  relationship: s.optional(s.string()),
  type: s.optional(s.lazy(() => type214Schema)),
  website: s.optional(s.string()),
});
