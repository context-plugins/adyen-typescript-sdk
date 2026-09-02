import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type StoredValueIssueRequest = {
  amount?: Amount;
  merchantAccount: string;
  paymentMethod: Record<string, string>;
  recurringDetailReference?: string;
  reference: string;
  shopperInteraction?: ShopperInteraction;
  shopperReference?: string;
  store?: string;
};

export const storedValueIssueRequestSchema: Schema<StoredValueIssueRequest> =
  s.object<StoredValueIssueRequest>({
    amount: s.optional(s.lazy(() => amountSchema)),
    merchantAccount: s.string(),
    paymentMethod: s.record(s.string(), s.string()),
    recurringDetailReference: s.optional(s.string()),
    reference: s.string(),
    shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
    shopperReference: s.optional(s.string()),
    store: s.optional(s.string()),
  });
