import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Settings to define the header of the shopper receipt. */
export type CardholderReceipt1 = {
  /**
   * The structure of the header to show on the shopper receipt. You can define the order of one or
   * two header lines and blank lines. For example, **header1,header2,filler**. The text of the
   * header lines is defined in the Customer Area under **In-person payments** > **Terminal
   * settings** > **Receipts** in the **Receipt lines** block.
   */
  headerForAuthorizedReceipt?: string;
};

export const cardholderReceipt1Schema: Schema<CardholderReceipt1> = s.object<CardholderReceipt1>({
  headerForAuthorizedReceipt: s.optional(s.string()),
});
