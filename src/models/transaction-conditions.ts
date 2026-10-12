import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { forceEntryModeSchema, type ForceEntryMode } from "./force-entry-mode.js";
import { loyaltyHandling1Schema, type LoyaltyHandling1 } from "./loyalty-handling1.js";

/** Conditions on which the transaction must be processed. */
export type TransactionConditions = {
  /**
   * Payment brands accepted for this transaction. Card payment brands allowed by the Sale System
   * for the payment transaction. Restrict brand if data sent.
   */
  allowedPaymentBrand?: string[];
  /** Identification of the Acquirer. Restrict to these Acquirer if present. */
  acquirerId?: number[];
  /** The preferred type of payment is a debit transaction rather than a credit transaction. */
  debitPreferredFlag?: boolean;
  /**
   * Loyalty brands or programs allowed by the Sale System for the loyalty transaction. Restrict
   * brand if data sent.
   */
  allowedLoyaltyBrand?: string[];
  /**
   * Type of Loyalty processing requested by the Sale System. Possible values:
   * * **Allowed**
   * * **Forbidden**
   * * **Processed**
   * * **Proposed**
   * * **Required**
   */
  loyaltyHandling?: LoyaltyHandling1;
  /**
   * The language used on the terminal screen or in text printed by the terminal. Typical use case
   * is setting the language on unattended terminals. Format: two-character [ISO
   * 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.
   */
  customerLanguage?: string;
  /**
   * Indicates if the Cashier requires POI forces online access to the Acquirer. Go online if data
   * sent.
   *
   * @default false
   */
  forceOnlineFlag?: boolean;
  /**
   * Payment instrument entry mode requested by the Sale System. Restrict entry mode if sent.
   * Possible values:
   * * **CheckReader**
   * * **Contactless**
   * * **File**
   * * **ICC**
   * * **Keyed**
   * * **MagStripe**
   * * **Manual**
   * * **RFID**
   * * **Scanned**
   * * **SynchronousICC**
   * * **Tapped**
   */
  forceEntryMode?: ForceEntryMode[];
  /**
   * The code which identifies the category of the transaction (MCC). The payment implies a specific
   * MCC.
   */
  merchantCategoryCode?: string;
};

export const transactionConditionsSchema: Schema<TransactionConditions> = s.object<TransactionConditions>({
  allowedPaymentBrand: s.optional(s.array(s.string())),
  acquirerId: s.optional(s.array(s.int())),
  debitPreferredFlag: s.optional(s.boolean()),
  allowedLoyaltyBrand: s.optional(s.array(s.string())),
  loyaltyHandling: s.optional(s.lazy(() => loyaltyHandling1Schema)),
  customerLanguage: s.optional(s.string()),
  forceOnlineFlag: s.defaulted(s.boolean(), false),
  forceEntryMode: s.optional(s.array(s.lazy(() => forceEntryModeSchema))),
  merchantCategoryCode: s.optional(s.string()),
  _keysMap: {
    allowedPaymentBrand: "AllowedPaymentBrand",
    acquirerId: "AcquirerID",
    debitPreferredFlag: "DebitPreferredFlag",
    allowedLoyaltyBrand: "AllowedLoyaltyBrand",
    loyaltyHandling: "LoyaltyHandling",
    customerLanguage: "CustomerLanguage",
    forceOnlineFlag: "ForceOnlineFlag",
    forceEntryMode: "ForceEntryMode",
    merchantCategoryCode: "MerchantCategoryCode",
  },
});
