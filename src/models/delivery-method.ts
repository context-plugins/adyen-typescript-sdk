import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount24Schema, type Amount24 } from "./amount24.js";
import { type21Schema, type Type21 } from "./type21.js";

export type DeliveryMethod = {
  /** The cost of this delivery method. */
  amount?: Amount24;
  /** The name of the delivery method as shown to the shopper. */
  description?: string;
  /** The reference of the delivery method. */
  reference?: string;
  /**
   * If you display the PayPal lightbox with delivery methods, set to **true** for the delivery
   * method that is selected. Only one delivery method can be selected at a time.
   */
  selected?: boolean;
  /** The type of the delivery method. */
  type?: Type21;
};

export const deliveryMethodSchema: Schema<DeliveryMethod> = s.object<DeliveryMethod>({
  amount: s.optional(s.lazy(() => amount24Schema)),
  description: s.optional(s.string()),
  reference: s.optional(s.string()),
  selected: s.optional(s.boolean()),
  type: s.optional(s.lazy(() => type21Schema)),
});
