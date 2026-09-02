import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type26Schema, type Type26 } from "./type26.js";

export type CheckoutThreeDs2Action = {
  authorisationToken?: string;
  paymentData?: string;
  paymentMethodType?: string;
  subtype?: string;
  token?: string;
  type: Type26;
  url?: string;
};

export const checkoutThreeDs2ActionSchema: Schema<CheckoutThreeDs2Action> = s.object<CheckoutThreeDs2Action>({
  authorisationToken: s.optional(s.string()),
  paymentData: s.optional(s.string()),
  paymentMethodType: s.optional(s.string()),
  subtype: s.optional(s.string()),
  token: s.optional(s.string()),
  type: type26Schema,
  url: s.optional(s.string()),
});
