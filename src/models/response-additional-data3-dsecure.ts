import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseAdditionalData3DSecure = {
  /**
   * Information provided by the issuer to the cardholder. If this field is present, you need to
   * display this information to the cardholder.
   */
  cardHolderInfo?: string;
  /**
   * The Cardholder Authentication Verification Value (CAVV) for the 3D Secure authentication
   * session, as a Base64-encoded 20-byte array.
   */
  cavv?: string;
  /** The CAVV algorithm used. */
  cavvAlgorithm?: string;
  /**
   * Shows the [exemption
   * type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest)
   * that Adyen requested for the payment.
   *
   * Possible values:
   * * **lowValue**
   * * **secureCorporate**
   * * **trustedBeneficiary**
   * * **transactionRiskAnalysis**
   */
  scaExemptionRequested?: string;
  /** Indicates whether a card is enrolled for 3D Secure 2. */
  threeds2CardEnrolled?: boolean;
};

export const responseAdditionalData3DSecureSchema: Schema<ResponseAdditionalData3DSecure> =
  s.object<ResponseAdditionalData3DSecure>({
    cardHolderInfo: s.optional(s.string()),
    cavv: s.optional(s.string()),
    cavvAlgorithm: s.optional(s.string()),
    scaExemptionRequested: s.optional(s.string()),
    threeds2CardEnrolled: s.optional(s.boolean()),
    _keysMap: {
      threeds2CardEnrolled: "threeds2.cardEnrolled",
    },
  });
