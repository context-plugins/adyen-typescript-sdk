import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount44Schema, type Amount44 } from "./amount44.js";
import { amount45Schema, type Amount45 } from "./amount45.js";
import { amount46Schema, type Amount46 } from "./amount46.js";
import { deliveryAddress5Schema, type DeliveryAddress5 } from "./delivery-address5.js";
import { deliveryMethodSchema, type DeliveryMethod } from "./delivery-method.js";
import { taxTotal2Schema, type TaxTotal2 } from "./tax-total2.js";

export type PaypalUpdateOrderRequest = {
  amount?: Amount44;
  deliveryAddress?: DeliveryAddress5;
  deliveryMethods?: DeliveryMethod[];
  discountAmount?: Amount45;
  paymentData?: string;
  pspReference?: string;
  sessionId?: string;
  shippingAmount?: Amount46;
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
