import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { bankCategoryDataSchema, type BankCategoryData } from "../bank-category-data.js";
import { internalCategoryDataSchema, type InternalCategoryData } from "../internal-category-data.js";
import { issuedCardSchema, type IssuedCard } from "../issued-card.js";
import { platformPaymentSchema, type PlatformPayment } from "../platform-payment.js";

/** The relevant data according to the transfer category. */
export type CategoryData =
  | (IssuedCard & { type: "issuedCard" })
  | (PlatformPayment & { type: "platformPayment" })
  | (BankCategoryData & { type: "bank" })
  | (InternalCategoryData & { type: "internal" });

export const categoryDataSchema: Schema<CategoryData> = s.discriminatedUnion<CategoryData>("type", {
  issuedCard: issuedCardSchema,
  platformPayment: platformPaymentSchema,
  bank: bankCategoryDataSchema,
  internal: internalCategoryDataSchema,
});
