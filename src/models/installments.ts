import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { planSchema, type Plan } from "./plan.js";

/**
 * Contains installment settings. For more information, refer to
 * [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).
 */
export type Installments = {
  /**
   * Defines the bonus percentage, refund percentage or if the transaction is Buy now Pay later.
   * Used for [card installments in
   * Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico)
   */
  extra?: number;
  /**
   * The installment plan, used for [card installments in
   * Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan).
   * and
   * [Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico).
   * By default, this is set to **regular**.
   */
  plan?: Plan;
  /**
   * Defines the number of installments. Usually, the maximum allowed number of installments is
   * capped. For example, it may not be possible to split a payment in more than 24 installments.
   * The acquirer sets this upper limit, so its value may vary. This value can be zero for
   * Installments processed in Mexico.
   */
  value: number;
};

export const installmentsSchema: Schema<Installments> = s.object<Installments>({
  extra: s.optional(s.int()),
  plan: s.optional(s.lazy(() => planSchema)),
  value: s.int(),
});
