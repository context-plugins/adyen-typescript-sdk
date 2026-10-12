import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountsResp1Schema, type AmountsResp1 } from "./amounts-resp1.js";
import { authenticationMethod1Schema, type AuthenticationMethod1 } from "./authentication-method1.js";
import { capturedSignature1Schema, type CapturedSignature1 } from "./captured-signature1.js";
import { currencyConversionSchema, type CurrencyConversion } from "./currency-conversion.js";
import { instalment1Schema, type Instalment1 } from "./instalment1.js";
import { paymentAcquirerDataSchema, type PaymentAcquirerData } from "./payment-acquirer-data.js";
import { paymentInstrumentDataSchema, type PaymentInstrumentData } from "./payment-instrument-data.js";
import { paymentType1Schema, type PaymentType1 } from "./payment-type1.js";

/**
 * Data related to the result of a processed payment transaction. If one data element is present.
 */
export type PaymentResult11 = {
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
   * Data related to the instrument of payment for the transaction. Sent in the result of the
   * payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be
   * processed by the Sale System.
   */
  paymentInstrumentData?: PaymentInstrumentData;
  /**
   * Various amounts related to the payment response from the POI System. Amounts approved by the
   * POI and the Acquirer for the payment and loyalty transaction, containing:
   *   * The authorised amount to be paid.
   *   * The amount of the rebates.
   *   * The amount of financial fees.
   *   * The cash back part of the requested amount for a payment with cash back.
   *   * The tip part of the requested amount for a payment with tip.
   */
  amountsResp?: AmountsResp1;
  /**
   * Information related an instalment transaction. To request an instalment to the issuer, or to
   * make individual instalments of a payment transaction.
   */
  instalment?: Instalment1;
  /**
   * Information related to a currency conversion. A currency conversion occurred in the payment,
   * and the merchant needs to know information related to this conversion (e.g. to print on the
   * sale receipt).
   */
  currencyConversion?: CurrencyConversion[];
  /**
   * Indicates that the Merchant forced the result of the payment to successful. Allows the Sale
   * System to be sure that the payment has been forced.
   *
   * @default false
   */
  merchantOverrideFlag?: boolean;
  /**
   * Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g.
   * the signature of a cardholder on the merchant payment receipt. Only one format of the signature
   * is allowed:
   *   * The size of the pad area where the signature is written, given with the maximum abscissa
   *     and ordinate values.
   *   * The sequence of coordinates where the pen changes direction or lift.
   */
  capturedSignature?: CapturedSignature1;
  /**
   * Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g.
   * the signature of a cardholder on the merchant payment receipt. The format before encryption is
   * the encoded data structure CapturedSignature. The data structure before encryption includes the
   * start and end tags for an XML encoding, the identifier and length bytes for an ASN.1 encoding,
   * and the complete member ProtectedSignature for a JSON encoding.
   */
  protectedSignature?: string;
  /**
   * The language of the customer that was used on the terminal screen or in text printed by the
   * terminal. Format: two-character [ISO
   * 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.
   */
  customerLanguage?: string;
  /**
   * Indicate that the payment transaction processing has required the approval of a host. Allows
   * the Sale System to know if the payment was online or offline.
   *
   * @default true
   */
  onlineFlag?: boolean;
  /**
   * Method for customer authentication. Allows the Sale System informed about customer
   * authentication for the payment transaction. Possible values:
   * * **Bypass**
   * * **ManualVerification**
   * * **MerchantAuthentication**
   * * **OfflinePIN**
   * * **OnlinePIN**
   * * **PaperSignature**
   * * **SecureCertificate**
   * * **SecureNoCertificate**
   * * **SecuredChannel**
   * * **SignatureCapture**
   * * **UnknownMethod**
   */
  authenticationMethod?: AuthenticationMethod1[];
  /**
   * End of the validity period for the reservation, for the first reservation, and the reservation
   * updates as well.
   */
  validityDate?: string;
  /** Data related to the response from the payment Acquirer. */
  paymentAcquirerData?: PaymentAcquirerData;
};

export const paymentResult11Schema: Schema<PaymentResult11> = s.object<PaymentResult11>({
  paymentType: s.optional(s.lazy(() => paymentType1Schema)),
  paymentInstrumentData: s.optional(s.lazy(() => paymentInstrumentDataSchema)),
  amountsResp: s.optional(s.lazy(() => amountsResp1Schema)),
  instalment: s.optional(s.lazy(() => instalment1Schema)),
  currencyConversion: s.optional(s.array(s.lazy(() => currencyConversionSchema))),
  merchantOverrideFlag: s.defaulted(s.boolean(), false),
  capturedSignature: s.optional(s.lazy(() => capturedSignature1Schema)),
  protectedSignature: s.optional(s.string()),
  customerLanguage: s.optional(s.string()),
  onlineFlag: s.defaulted(s.boolean(), true),
  authenticationMethod: s.optional(s.array(s.lazy(() => authenticationMethod1Schema))),
  validityDate: s.optional(s.dateOnly()),
  paymentAcquirerData: s.optional(s.lazy(() => paymentAcquirerDataSchema)),
  _keysMap: {
    paymentType: "PaymentType",
    paymentInstrumentData: "PaymentInstrumentData",
    amountsResp: "AmountsResp",
    instalment: "Instalment",
    currencyConversion: "CurrencyConversion",
    merchantOverrideFlag: "MerchantOverrideFlag",
    capturedSignature: "CapturedSignature",
    protectedSignature: "ProtectedSignature",
    customerLanguage: "CustomerLanguage",
    onlineFlag: "OnlineFlag",
    authenticationMethod: "AuthenticationMethod",
    validityDate: "ValidityDate",
    paymentAcquirerData: "PaymentAcquirerData",
  },
});
