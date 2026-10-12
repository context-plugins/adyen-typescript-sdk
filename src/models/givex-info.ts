import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentFlowSchema, type PaymentFlow } from "./payment-flow.js";

export type GivexInfo = {
  /** The three-character ISO currency code, such as **EUR**. */
  currencyCode: string;
  /** The password provided by the acquirer. */
  password: string;
  /** The sales channel used for the payment. */
  paymentFlow: PaymentFlow;
  /** The username provided by the acquirer. */
  username: string;
};

export const givexInfoSchema: Schema<GivexInfo> = s.object<GivexInfo>({
  currencyCode: s.string(),
  password: s.string(),
  paymentFlow: paymentFlowSchema,
  username: s.string(),
});
