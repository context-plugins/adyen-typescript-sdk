import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardholderReceipt = {
  headerForAuthorizedReceipt?: string;
};

export const cardholderReceiptSchema: Schema<CardholderReceipt> = s.object<CardholderReceipt>({
  headerForAuthorizedReceipt: s.optional(s.string()),
});
