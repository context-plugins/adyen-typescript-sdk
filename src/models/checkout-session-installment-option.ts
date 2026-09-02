import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plan1Schema, type Plan1 } from "./plan1.js";

export type CheckoutSessionInstallmentOption = {
  plans?: Plan1[];
  preselectedValue?: number;
  values?: number[];
};

export const checkoutSessionInstallmentOptionSchema: Schema<CheckoutSessionInstallmentOption> =
  s.object<CheckoutSessionInstallmentOption>({
    plans: s.optional(s.array(s.lazy(() => plan1Schema))),
    preselectedValue: s.optional(s.number()),
    values: s.optional(s.array(s.number())),
  });
