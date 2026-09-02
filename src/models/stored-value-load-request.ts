import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { loadTypeSchema, type LoadType } from "./load-type.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type StoredValueLoadRequest = {
  amount: Amount;
  loadType?: LoadType;
  merchantAccount: string;
  paymentMethod: Record<string, string>;
  recurringDetailReference?: string;
  reference: string;
  shopperInteraction?: ShopperInteraction;
  shopperReference?: string;
  store?: string;
};

export const storedValueLoadRequestSchema: Schema<StoredValueLoadRequest> = s.object<StoredValueLoadRequest>({
  amount: amountSchema,
  loadType: s.optional(s.lazy(() => loadTypeSchema)),
  merchantAccount: s.string(),
  paymentMethod: s.record(s.string(), s.string()),
  recurringDetailReference: s.optional(s.string()),
  reference: s.string(),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperReference: s.optional(s.string()),
  store: s.optional(s.string()),
});
