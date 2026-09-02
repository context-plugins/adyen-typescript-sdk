import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { interchangeDataSchema, type InterchangeData } from "../interchange-data.js";
import { issuingTransactionDataSchema, type IssuingTransactionData } from "../issuing-transaction-data.js";
import { merchantPurchaseDataSchema, type MerchantPurchaseData } from "../merchant-purchase-data.js";

export type EventsDatum =
  | (MerchantPurchaseData & { type: "merchantPurchaseData" })
  | (IssuingTransactionData & { type: "issuingTransactionData" })
  | (InterchangeData & { type: "interchangeData" });

export const eventsDatumSchema: Schema<EventsDatum> = s.discriminatedUnion<EventsDatum>("type", {
  merchantPurchaseData: merchantPurchaseDataSchema,
  issuingTransactionData: issuingTransactionDataSchema,
  interchangeData: interchangeDataSchema,
});
