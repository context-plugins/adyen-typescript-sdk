import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type NotifyShopperRequest = {
  amount: Amount;
  billingDate?: string;
  billingSequenceNumber?: string;
  displayedReference?: string;
  merchantAccount: string;
  recurringDetailReference?: string;
  reference: string;
  shopperReference: string;
  storedPaymentMethodId?: string;
};

export const notifyShopperRequestSchema: Schema<NotifyShopperRequest> = s.object<NotifyShopperRequest>({
  amount: amountSchema,
  billingDate: s.optional(s.string()),
  billingSequenceNumber: s.optional(s.string()),
  displayedReference: s.optional(s.string()),
  merchantAccount: s.string(),
  recurringDetailReference: s.optional(s.string()),
  reference: s.string(),
  shopperReference: s.string(),
  storedPaymentMethodId: s.optional(s.string()),
});
