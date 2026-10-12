import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubMerchantData = {
  /** The email associated with the sub-merchant's account. */
  email: string;
  /**
   * A unique identifier that you create for the sub-merchant, used by schemes to identify the
   * sub-merchant.
   * * Format: Alphanumeric
   * * Maximum length: 15 characters
   */
  id: string;
  /**
   * The sub-merchant's 4-digit Merchant Category Code (MCC).
   * * Format: Numeric
   * * Fixed length: 4 digits
   */
  mcc: string;
  /**
   * The name of the sub-merchant. Based on scheme specifications, this value will overwrite the
   * shopper statement that will appear in the card statement.
   * * Format: Alphanumeric
   * * Maximum length: 22 characters
   */
  name: string;
};

export const subMerchantDataSchema: Schema<SubMerchantData> = s.object<SubMerchantData>({
  email: s.string(),
  id: s.string(),
  mcc: s.string(),
  name: s.string(),
});
