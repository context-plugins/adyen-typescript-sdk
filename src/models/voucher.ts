import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type29Schema, type Type29 } from "./type29.js";

export type Voucher = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** The shopper's first name. */
  firstName: string;
  /** The shopper's last name. */
  lastName: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** The shopper's email. */
  shopperEmail: string;
  /**
   * The shopper's contact number. It must have an international number format, for example **+31 20
   * 779 1846**. Formats like **+31 (0)20 779 1846** or **0031 20 779 1846** are not accepted.
   */
  telephoneNumber: string;
  /**
   * **econtextvoucher**
   */
  type: Type29;
};

export const voucherSchema: Schema<Voucher> = s.object<Voucher>({
  checkoutAttemptId: s.optional(s.string()),
  firstName: s.string(),
  lastName: s.string(),
  sdkData: s.optional(s.string()),
  shopperEmail: s.string(),
  telephoneNumber: s.string(),
  type: type29Schema,
});
