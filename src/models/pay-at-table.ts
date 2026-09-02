import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethodSchema, type AuthenticationMethod } from "./authentication-method.js";
import { paymentInstrumentSchema, type PaymentInstrument } from "./payment-instrument.js";

export type PayAtTable = {
  authenticationMethod?: AuthenticationMethod;
  enablePayAtTable?: boolean;
  paymentInstrument?: PaymentInstrument | null;
};

export const payAtTableSchema: Schema<PayAtTable> = s.object<PayAtTable>({
  authenticationMethod: s.optional(s.lazy(() => authenticationMethodSchema)),
  enablePayAtTable: s.optional(s.boolean()),
  paymentInstrument: s.optionalNullable(s.lazy(() => paymentInstrumentSchema)),
});
