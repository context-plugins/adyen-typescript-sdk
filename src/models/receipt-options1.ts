import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReceiptOptions1 = {
  headerLine1?: string;
  headerLine2?: string;
  logo?: string;
  promptBeforePrinting?: boolean;
  qrCodeData?: string;
};

export const receiptOptions1Schema: Schema<ReceiptOptions1> = s.object<ReceiptOptions1>({
  headerLine1: s.optional(s.string()),
  headerLine2: s.optional(s.string()),
  logo: s.optional(s.string()),
  promptBeforePrinting: s.optional(s.boolean()),
  qrCodeData: s.optional(s.string()),
});
