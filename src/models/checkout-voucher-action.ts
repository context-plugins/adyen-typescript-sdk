import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount14Schema, type Amount14 } from "./amount14.js";
import { amount15Schema, type Amount15 } from "./amount15.js";
import { amount16Schema, type Amount16 } from "./amount16.js";

export type CheckoutVoucherAction = {
  /** The voucher alternative reference code. */
  alternativeReference?: string;
  /** A collection institution number (store number) for Econtext Pay-Easy ATM. */
  collectionInstitutionNumber?: string;
  /** The URL to download the voucher. */
  downloadUrl?: string;
  /** An entity number of Multibanco. */
  entity?: string;
  /** The date time of the voucher expiry. */
  expiresAt?: string;
  /** The initial amount. */
  initialAmount?: Amount14;
  /** The URL to the detailed instructions to make payment using the voucher. */
  instructionsUrl?: string;
  /** The issuer of the voucher. */
  issuer?: string;
  /** The shopper telephone number (partially masked). */
  maskedTelephoneNumber?: string;
  /** The merchant name. */
  merchantName?: string;
  /** The merchant reference. */
  merchantReference?: string;
  /**
   * A Base64-encoded token containing all properties of the voucher. For iOS, you can use this to
   * pass a voucher to Apple Wallet.
   */
  passCreationToken?: string;
  /** Encoded payment data. */
  paymentData?: string;
  /** Specifies the payment method. */
  paymentMethodType?: string;
  /** The voucher reference code. */
  reference?: string;
  /** The shopper email. */
  shopperEmail?: string;
  /** The shopper name. */
  shopperName?: string;
  /** The surcharge amount. */
  surcharge?: Amount15;
  /** The total amount (initial plus surcharge amount). */
  totalAmount?: Amount16;
  /** **voucher** @default "voucher" */
  type?: "voucher";
  /** Specifies the URL to redirect to. */
  url?: string;
};

export const checkoutVoucherActionSchema: Schema<CheckoutVoucherAction> = s.object<CheckoutVoucherAction>({
  alternativeReference: s.optional(s.string()),
  collectionInstitutionNumber: s.optional(s.string()),
  downloadUrl: s.optional(s.string()),
  entity: s.optional(s.string()),
  expiresAt: s.optional(s.string()),
  initialAmount: s.optional(s.lazy(() => amount14Schema)),
  instructionsUrl: s.optional(s.string()),
  issuer: s.optional(s.string()),
  maskedTelephoneNumber: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  merchantReference: s.optional(s.string()),
  passCreationToken: s.optional(s.string()),
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  reference: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperName: s.optional(s.string()),
  surcharge: s.optional(s.lazy(() => amount15Schema)),
  totalAmount: s.optional(s.lazy(() => amount16Schema)),
  type: s.defaulted(s.literal("voucher"), "voucher"),
  url: s.optional(s.string()),
});
