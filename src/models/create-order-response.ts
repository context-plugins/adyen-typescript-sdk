import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount12Schema, type Amount12 } from "./amount12.js";
import { amount23Schema, type Amount23 } from "./amount23.js";
import { fraudResult1Schema, type FraudResult1 } from "./fraud-result1.js";

export type CreateOrderResponse = {
  additionalData?: Record<string, string>;
  amount: Amount12;
  expiresAt: string;
  fraudResult?: FraudResult1;
  orderData: string;
  pspReference?: string;
  reference?: string;
  refusalReason?: string;
  remainingAmount: Amount23;
  resultCode: "Success";
};

export const createOrderResponseSchema: Schema<CreateOrderResponse> = s.object<CreateOrderResponse>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amount12Schema,
  expiresAt: s.string(),
  fraudResult: s.optional(s.lazy(() => fraudResult1Schema)),
  orderData: s.string(),
  pspReference: s.optional(s.string()),
  reference: s.optional(s.string()),
  refusalReason: s.optional(s.string()),
  remainingAmount: amount23Schema,
  resultCode: s.literal("Success"),
});
