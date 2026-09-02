import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import {
  costEstimateAssumptions1Schema,
  type CostEstimateAssumptions1,
} from "./cost-estimate-assumptions1.js";
import { merchantDetails2Schema, type MerchantDetails2 } from "./merchant-details2.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type CostEstimateRequest = {
  amount: Amount;
  assumptions?: CostEstimateAssumptions1;
  cardNumber?: string;
  encryptedCardNumber?: string;
  merchantAccount: string;
  merchantDetails?: MerchantDetails2;
  recurring?: Recurring;
  selectedRecurringDetailReference?: string;
  shopperInteraction?: ShopperInteraction;
  shopperReference?: string;
};

export const costEstimateRequestSchema: Schema<CostEstimateRequest> = s.object<CostEstimateRequest>({
  amount: amountSchema,
  assumptions: s.optional(s.lazy(() => costEstimateAssumptions1Schema)),
  cardNumber: s.optional(s.string()),
  encryptedCardNumber: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantDetails: s.optional(s.lazy(() => merchantDetails2Schema)),
  recurring: s.optional(s.lazy(() => recurringSchema)),
  selectedRecurringDetailReference: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperReference: s.optional(s.string()),
});
