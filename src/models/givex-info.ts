import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentFlowSchema, type PaymentFlow } from "./payment-flow.js";

export type GivexInfo = {
  currencyCode: string;
  password: string;
  paymentFlow: PaymentFlow;
  username: string;
};

export const givexInfoSchema: Schema<GivexInfo> = s.object<GivexInfo>({
  currencyCode: s.string(),
  password: s.string(),
  paymentFlow: paymentFlowSchema,
  username: s.string(),
});
