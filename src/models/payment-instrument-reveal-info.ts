import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expiry2Schema, type Expiry2 } from "./expiry2.js";

export type PaymentInstrumentRevealInfo = {
  /** The CVC2 value of the card. */
  cvc: string;
  /** The expiration date of the card. */
  expiration: Expiry2;
  /** The primary account number (PAN) of the card. */
  pan: string;
};

export const paymentInstrumentRevealInfoSchema: Schema<PaymentInstrumentRevealInfo> =
  s.object<PaymentInstrumentRevealInfo>({
    cvc: s.string(),
    expiration: expiry2Schema,
    pan: s.string(),
  });
