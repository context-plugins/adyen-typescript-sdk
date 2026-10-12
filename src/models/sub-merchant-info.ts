import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount32Schema, type Amount32 } from "./amount32.js";
import { billingAddress4Schema, type BillingAddress4 } from "./billing-address4.js";

export type SubMerchantInfo = {
  /**
   * Required for transactions performed by registered payment facilitators. The sub-merchant's
   * address.
   */
  address?: BillingAddress4;
  /**
   * Required for transactions performed by registered payment facilitators. The amount of the
   * payment corresponding to each sub-merchant. This value will be different than the request
   * amount if shopper is purchasing items at different sub-merchants' shops.
   */
  amount?: Amount32;
  /**
   * Required for transactions performed by registered payment facilitators. The email associated
   * with the sub-merchant's account.
   */
  email?: string;
  /**
   * Required for transactions performed by registered payment facilitators. A unique identifier
   * that you create for the sub-merchant, used by schemes to identify the sub-merchant.
   * * Format: Alphanumeric
   * * Maximum length: 15 characters
   */
  id?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The sub-merchant's
   * 4-digit Merchant Category Code (MCC).
   * * Format: Numeric
   * * Fixed length: 4 digits
   */
  mcc?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The name of the
   * sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement
   * that will appear in the card statement. Exception: for acquirers in Brazil, this value does not
   * overwrite the shopper statement.
   * * Format: Alphanumeric
   * * Maximum length: 22 characters
   */
  name?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The phone number
   * associated with the sub-merchant's account.
   */
  phoneNumber?: string;
  registeredSince?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The tax ID of the
   * sub-merchant.
   * * Format: Numeric
   * * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
   */
  taxId?: string;
  /**
   * Required for transactions performed by registered payment facilitators. The sub-merchant's URL
   * on the platform, i.e. the sub-merchant's shop.
   */
  url?: string;
};

export const subMerchantInfoSchema: Schema<SubMerchantInfo> = s.object<SubMerchantInfo>({
  address: s.optional(s.lazy(() => billingAddress4Schema)),
  amount: s.optional(s.lazy(() => amount32Schema)),
  email: s.optional(s.string()),
  id: s.optional(s.string()),
  mcc: s.optional(s.string()),
  name: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  registeredSince: s.optional(s.string()),
  taxId: s.optional(s.string()),
  url: s.optional(s.string()),
});
