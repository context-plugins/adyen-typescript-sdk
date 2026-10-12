import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PinChangeRequest = {
  /**
   * The symmetric session key that you encrypted with the [public
   * key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received
   * from Adyen.
   */
  encryptedKey: string;
  /** The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block). */
  encryptedPinBlock: string;
  /**
   * The unique identifier of the payment instrument, which is the card for which you are managing
   * the PIN.
   */
  paymentInstrumentId: string;
  /** The 16-digit token that you used to generate the `encryptedPinBlock`. */
  token: string;
};

export const pinChangeRequestSchema: Schema<PinChangeRequest> = s.object<PinChangeRequest>({
  encryptedKey: s.string(),
  encryptedPinBlock: s.string(),
  paymentInstrumentId: s.string(),
  token: s.string(),
});
