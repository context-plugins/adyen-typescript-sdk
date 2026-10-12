import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plan1Schema, type Plan1 } from "./plan1.js";

export type CheckoutSessionInstallmentOption = {
  /**
   * Defines the type of installment plan. If not set, defaults to **regular**.
   *
   * Possible values:
   * * **regular**
   * * **revolving**
   * * **bonus**
   * * **with_interest**
   * * **buynow_paylater**
   * * **nointerest_bonus**
   * * **interest_bonus**
   * * **refund_prctg**
   * * **nointeres_refund_prctg**
   * * **interes_refund_prctg**
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

export const checkoutSessionInstallmentOptionSchema: Schema<CheckoutSessionInstallmentOption> =
  s.object<CheckoutSessionInstallmentOption>({
    plans: s.optional(s.array(s.lazy(() => plan1Schema))),
    preselectedValue: s.optional(s.int()),
    values: s.optional(s.array(s.int())),
  });
