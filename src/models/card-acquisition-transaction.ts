import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { forceEntryModeSchema, type ForceEntryMode } from "./force-entry-mode.js";
import { loyaltyHandling2Schema, type LoyaltyHandling2 } from "./loyalty-handling2.js";
import { paymentType1Schema, type PaymentType1 } from "./payment-type1.js";

export type CardAcquisitionTransaction = {
  /** Card payment brands allowed by the Sale System for the payment transaction. */
  allowedPaymentBrand?: string[];
  /** Loyalty brands or programs allowed by the Sale System for the loyalty transaction. */
  allowedLoyaltyBrand?: string[];
  /**
   * Type of Loyalty processing requested by the Sale System. An way to specify what the POI has to
   * handle concerning the loyalty. Possible values:
   * * **Allowed**
   * * **Forbidden**
   * * **Processed**
   * * **Proposed**
   * * **Required**
   */
  loyaltyHandling?: LoyaltyHandling2;
  /**
   * The language used on the terminal screen or in text printed by the terminal. Typical use case
   * is setting the language on unattended terminals. Format: two-character [ISO
   * 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.
   */
  customerLanguage?: string;
  /**
   * Payment instrument entry mode requested by the Sale System. Avoid retry on an out of order card
   * reading device, when the sale system knows that some card entry modes on the POI do not work.
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
  /** Indicates if the Customer realises the selection of the card application. */
  forceCustomerSelectionFlag?: boolean;
  /**
   * Amount of a transaction. In the Card Acquisition Request message, it allows the processing of a
   * contactless card.
   */
  totalAmount?: number;
  /**
   * Type of payment transaction. Elements requested by the Sale System that are related to the
   * payment only. Possible values:
   * * **CashAdvance**
   * * **CashDeposit**
   * * **Completion**
   * * **FirstReservation**
   * * **Instalment**
   * * **IssuerInstalment**
   * * **Normal**
   * * **OneTimeReservation**
   * * **PaidOut**
   * * **Recurring**
   * * **Refund**
   * * **UpdateReservation**
   */
  paymentType?: PaymentType1;
  /**
   * Cash back has been requested with the payment transaction. Allows choice of the Customer
   * language when the POI displays messages or print text to Merchant interface.
   */
  cashBackFlag?: boolean;
};

export const cardAcquisitionTransactionSchema: Schema<CardAcquisitionTransaction> =
  s.object<CardAcquisitionTransaction>({
    allowedPaymentBrand: s.optional(s.array(s.string())),
    allowedLoyaltyBrand: s.optional(s.array(s.string())),
    loyaltyHandling: s.optional(s.lazy(() => loyaltyHandling2Schema)),
    customerLanguage: s.optional(s.string()),
    forceEntryMode: s.optional(s.array(s.lazy(() => forceEntryModeSchema))),
    forceCustomerSelectionFlag: s.optional(s.boolean()),
    totalAmount: s.optional(s.float64()),
    paymentType: s.optional(s.lazy(() => paymentType1Schema)),
    cashBackFlag: s.optional(s.boolean()),
    _keysMap: {
      allowedPaymentBrand: "AllowedPaymentBrand",
      allowedLoyaltyBrand: "AllowedLoyaltyBrand",
      loyaltyHandling: "LoyaltyHandling",
      customerLanguage: "CustomerLanguage",
      forceEntryMode: "ForceEntryMode",
      forceCustomerSelectionFlag: "ForceCustomerSelectionFlag",
      totalAmount: "TotalAmount",
      paymentType: "PaymentType",
      cashBackFlag: "CashBackFlag",
    },
  });
