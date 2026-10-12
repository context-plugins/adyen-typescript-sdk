import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssociatedPaymentMethod = {
  /** Indicates whether the payment method is enabled (**true**) or disabled (**false**). */
  enabled: boolean;
  /** The identifier of the payment method. */
  id: string;
  /**
   * Payment method
   * [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
   */
  type: string;
};

export const associatedPaymentMethodSchema: Schema<AssociatedPaymentMethod> =
  s.object<AssociatedPaymentMethod>({
    enabled: s.boolean(),
    id: s.string(),
    type: s.string(),
  });
