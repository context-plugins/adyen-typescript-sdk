import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expiry2Schema, type Expiry2 } from "./expiry2.js";

export type PaymentInstrumentRevealInfo = {
  cvc: string;
  expiration: Expiry2;
  pan: string;
};

export const paymentInstrumentRevealInfoSchema: Schema<PaymentInstrumentRevealInfo> =
  s.object<PaymentInstrumentRevealInfo>({
    cvc: s.string(),
    expiration: expiry2Schema,
    pan: s.string(),
  });
