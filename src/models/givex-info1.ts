import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentFlowSchema, type PaymentFlow } from "./payment-flow.js";

export type GivexInfo1 = {
  currencyCode: string;
  password: string;
  paymentFlow: PaymentFlow;
  username: string;
};

export const givexInfo1Schema: Schema<GivexInfo1> = s.object<GivexInfo1>({
  currencyCode: s.string(),
  password: s.string(),
  paymentFlow: paymentFlowSchema,
  username: s.string(),
});
