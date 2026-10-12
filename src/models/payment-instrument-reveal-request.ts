import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentInstrumentRevealRequest = {
  /**
   * The symmetric session key that you encrypted with the [public
   * key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received
   * from Adyen.
   */
  encryptedKey: string;
  /**
   * The unique identifier of the payment instrument, which is the card for which you are managing
   * the PIN.
   */
  paymentInstrumentId: string;
};

export const paymentInstrumentRevealRequestSchema: Schema<PaymentInstrumentRevealRequest> =
  s.object<PaymentInstrumentRevealRequest>({
    encryptedKey: s.string(),
    paymentInstrumentId: s.string(),
  });
