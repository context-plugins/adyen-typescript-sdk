import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plan1Schema, type Plan1 } from "./plan1.js";

export type InstallmentOption = {
  /** The maximum number of installments offered for this payment method. */
  maxValue?: number;
  /**
   * Defines the type of installment plan. If not set, defaults to **regular**.
   *
   * Possible values:
   * * **regular**
   * * **revolving**
   */
  plans?: Plan1[];
  /** Preselected number of installments offered for this payment method. */
  preselectedValue?: number;
  /**
   * An array of the number of installments that the shopper can choose from. For example,
   * **[2,3,5]**. This cannot be specified simultaneously with `maxValue`.
   */
  values?: number[];
};

export const installmentOptionSchema: Schema<InstallmentOption> = s.object<InstallmentOption>({
  maxValue: s.optional(s.int()),
  plans: s.optional(s.array(s.lazy(() => plan1Schema))),
  preselectedValue: s.optional(s.int()),
  values: s.optional(s.array(s.int())),
});
