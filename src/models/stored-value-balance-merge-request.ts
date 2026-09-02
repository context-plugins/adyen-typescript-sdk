import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type StoredValueBalanceMergeRequest = {
  amount?: Amount;
  merchantAccount: string;
  paymentMethod: Record<string, string>;
  recurringDetailReference?: string;
  reference: string;
  shopperInteraction?: ShopperInteraction;
  shopperReference?: string;
  sourcePaymentMethod: Record<string, string>;
  store?: string;
};

export const storedValueBalanceMergeRequestSchema: Schema<StoredValueBalanceMergeRequest> =
  s.object<StoredValueBalanceMergeRequest>({
    amount: s.optional(s.lazy(() => amountSchema)),
    merchantAccount: s.string(),
    paymentMethod: s.record(s.string(), s.string()),
    recurringDetailReference: s.optional(s.string()),
    reference: s.string(),
    shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
    shopperReference: s.optional(s.string()),
    sourcePaymentMethod: s.record(s.string(), s.string()),
    store: s.optional(s.string()),
  });
