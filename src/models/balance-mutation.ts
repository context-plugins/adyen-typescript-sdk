import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BalanceMutation = {
  /**
   * The amount in the payment's currency that is debited or credited on the balance accounting
   * register.
   */
  balance?: number;
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currency?: string;
  /**
   * The amount in the payment's currency that is debited or credited on the received accounting
   * register.
   */
  received?: number;
  /**
   * The amount in the payment's currency that is debited or credited on the reserved accounting
   * register.
   */
  reserved?: number;
};

export const balanceMutationSchema: Schema<BalanceMutation> = s.object<BalanceMutation>({
  balance: s.optional(s.int()),
  currency: s.optional(s.string()),
  received: s.optional(s.int()),
  reserved: s.optional(s.int()),
});
