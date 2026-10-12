import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReceiptOptions = {
  /** The text of the first header line to be shown on the receipt. */
  headerLine1?: string;
  /** The text of the second header line to be shown on the receipt. */
  headerLine2?: string;
  /**
   * The receipt logo converted to a Base64-encoded string. The image must be a .bmp file of < 256
   * KB, dimensions 240 (H) x 384 (W) px.
   */
  logo?: string;
  /** Indicates whether a screen appears asking if you want to print the shopper receipt. */
  promptBeforePrinting?: boolean;
  /**
   * Data to print on the receipt as a QR code. This can include static text and the following
   * variables:
   *
   * - `${merchantreference}`: the merchant reference of the transaction.
   * - `${pspreference}`: the PSP reference of the transaction.
   *
   * For example, **http://www.example.com/order/${pspreference}/${merchantreference}**.
   */
  qrCodeData?: string;
};

export const receiptOptionsSchema: Schema<ReceiptOptions> = s.object<ReceiptOptions>({
  headerLine1: s.optional(s.string()),
  headerLine2: s.optional(s.string()),
  logo: s.optional(s.string()),
  promptBeforePrinting: s.optional(s.boolean()),
  qrCodeData: s.optional(s.string()),
});
