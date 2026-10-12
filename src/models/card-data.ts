import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entryModeSchema, type EntryMode } from "./entry-mode.js";
import { paymentToken1Schema, type PaymentToken1 } from "./payment-token1.js";
import { sensitiveCardData1Schema, type SensitiveCardData1 } from "./sensitive-card-data1.js";

/**
 * Information related to the payment card used for the transaction. Allows acquisition of the card
 * data by the Sale System before the Payment, CardAcquisition, or BalanceInquiry request to the
 * POI. It can also be sent in the CardAcquisition response, to be processed by the Sale System.
 */
export type CardData = {
  /**
   * Type of payment card. If card PAN is readable. Indicates the card used to pay in the
   * PaymentResponse. Sent in the CardAcquisitionResponse, to leave the Cashier to choose between
   * several applications in a smartcard, or several brand in a co-branded card. In this case, the
   * CardAcquisitionRequest.ForceCustomerSelectionFlag must contain the value False. Brands are part
   * of the POI and Sale Systems configurations.
   */
  paymentBrand?: string;
  /**
   * Masked Primary Account Number Part of the PAN is replaced by a string of * characters, to
   * identify a customer account or relationship. Presence of this data element, which replace the
   * PAN when SensitiveCardData is protected and replaced by ProtectedCardData. Alternatively the
   * MaskedPAN can be used as a token to identify a customer.
   */
  maskedPan?: string;
  /**
   * Reference of the PAN, which identifies the PAN or the card uniquely, named also PAR (Payment
   * Account Reference). This reference may be defined by the card issuer or by a token service
   * provider under the control of the card issuer, and cannot be used for a payment transaction.
   */
  paymentAccountRef?: string;
  /**
   * Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue
   * Request messages, it informs the POI System the entry mode of the payment instrument
   * information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response
   * messages, it informs the Sale System the entry mode of the payment instrument. Possible values:
   * * **Contactless**
   * * **File**
   * * **ICC**
   * * **Keyed**
   * * **MagStripe**
   * * **Manual**
   * * **Mobile**
   * * **RFID**
   * * **Scanned**
   * * **SynchronousICC**
   * * **Tapped**
   */
  entryMode?: EntryMode[];
  /** Country Code attached to the card (3 numerics). If available in the card. */
  cardCountryCode?: number;
  /**
   * Sensitive information related to the payment card, protected by CMS. SensitiveCardData
   * protected by CMS EnvelopedData.
   */
  protectedCardData?: string;
  /**
   * Sensitive information related to the payment card, entered or read by the Sale System. If
   * structure non empty and unprotected.
   */
  sensitiveCardData?: SensitiveCardData1;
  /**
   * Surrogate of the PAN (Primary Account Number) of the payment card to identify the payment mean
   * of the customer. It allows, for a merchant, to identify the customer. Restriction of product
   * payable by a card.
   */
  paymentToken?: PaymentToken1;
};

export const cardDataSchema: Schema<CardData> = s.object<CardData>({
  paymentBrand: s.optional(s.string()),
  maskedPan: s.optional(s.string()),
  paymentAccountRef: s.optional(s.string()),
  entryMode: s.optional(s.array(s.lazy(() => entryModeSchema))),
  cardCountryCode: s.optional(s.int()),
  protectedCardData: s.optional(s.string()),
  sensitiveCardData: s.optional(s.lazy(() => sensitiveCardData1Schema)),
  paymentToken: s.optional(s.lazy(() => paymentToken1Schema)),
  _keysMap: {
    paymentBrand: "PaymentBrand",
    maskedPan: "MaskedPan",
    paymentAccountRef: "PaymentAccountRef",
    entryMode: "EntryMode",
    cardCountryCode: "CardCountryCode",
    protectedCardData: "ProtectedCardData",
    sensitiveCardData: "SensitiveCardData",
    paymentToken: "PaymentToken",
  },
});
