import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount44Schema, type Amount44 } from "./amount44.js";
import { amount45Schema, type Amount45 } from "./amount45.js";
import { amount46Schema, type Amount46 } from "./amount46.js";
import { deliveryAddress5Schema, type DeliveryAddress5 } from "./delivery-address5.js";
import { deliveryMethodSchema, type DeliveryMethod } from "./delivery-method.js";
import { taxTotal2Schema, type TaxTotal2 } from "./tax-total2.js";

export type PaypalUpdateOrderRequest = {
  /**
   * The updated final payment amount. This amount is the item total plus the shipping costs of the
   * selected `deliveryMethod`.
   */
  amount?: Amount44;
  /** The delivery address for this order. */
  deliveryAddress?: DeliveryAddress5;
  /** The list of new delivery methods and the cost of each. */
  deliveryMethods?: DeliveryMethod[];
  /** The discount amount for this order. */
  discountAmount?: Amount45;
  /**
   * The `paymentData` from the client side. This value changes every time you make a
   * `/paypal/updateOrder` request.
   */
  paymentData?: string;
  /** The original `pspReference` from the `/payments` response. */
  pspReference?: string;
  /** The original `sessionId` from the `/sessions` response. */
  sessionId?: string;
  /** The shipping amount for this order. */
  shippingAmount?: Amount46;
  /** Total tax amount from the order. */
  taxTotal?: TaxTotal2;
};

export const paypalUpdateOrderRequestSchema: Schema<PaypalUpdateOrderRequest> =
  s.object<PaypalUpdateOrderRequest>({
    amount: s.optional(s.lazy(() => amount44Schema)),
    deliveryAddress: s.optional(s.lazy(() => deliveryAddress5Schema)),
    deliveryMethods: s.optional(s.array(s.lazy(() => deliveryMethodSchema))),
    discountAmount: s.optional(s.lazy(() => amount45Schema)),
    paymentData: s.optional(s.string()),
    pspReference: s.optional(s.string()),
    sessionId: s.optional(s.string()),
    shippingAmount: s.optional(s.lazy(() => amount46Schema)),
    taxTotal: s.optional(s.lazy(() => taxTotal2Schema)),
  });
