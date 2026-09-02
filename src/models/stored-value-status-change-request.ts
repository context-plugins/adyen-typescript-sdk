import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";
import { status4Schema, type Status4 } from "./status4.js";

export type StoredValueStatusChangeRequest = {
  amount?: Amount;
  merchantAccount: string;
  paymentMethod: Record<string, string>;
  recurringDetailReference?: string;
  reference: string;
  shopperInteraction?: ShopperInteraction;
  shopperReference?: string;
  status: Status4;
  store?: string;
};

export const storedValueStatusChangeRequestSchema: Schema<StoredValueStatusChangeRequest> =
  s.object<StoredValueStatusChangeRequest>({
    amount: s.optional(s.lazy(() => amountSchema)),
    merchantAccount: s.string(),
    paymentMethod: s.record(s.string(), s.string()),
    recurringDetailReference: s.optional(s.string()),
    reference: s.string(),
    shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
    shopperReference: s.optional(s.string()),
    status: status4Schema,
    store: s.optional(s.string()),
  });
