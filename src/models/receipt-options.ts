import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReceiptOptions = {
  headerLine1?: string;
  headerLine2?: string;
  logo?: string;
  promptBeforePrinting?: boolean;
  qrCodeData?: string;
};

export const receiptOptionsSchema: Schema<ReceiptOptions> = s.object<ReceiptOptions>({
  headerLine1: s.optional(s.string()),
  headerLine2: s.optional(s.string()),
  logo: s.optional(s.string()),
  promptBeforePrinting: s.optional(s.boolean()),
  qrCodeData: s.optional(s.string()),
});
