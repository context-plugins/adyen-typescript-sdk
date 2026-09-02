import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { paymentInstrumentSchema, type PaymentInstrument } from "./payment-instrument.js";

export type PayAtTable1 = {
  authenticationMethod?: AuthenticationMethod;
  enablePayAtTable?: boolean;
  paymentInstrument?: PaymentInstrument | null;
};

export const payAtTable1Schema: Schema<PayAtTable1> = s.object<PayAtTable1>({
  authenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  enablePayAtTable: s.optional(s.boolean()),
  paymentInstrument: s.optionalNullable(s.lazy(() => paymentInstrumentSchema)),
});
