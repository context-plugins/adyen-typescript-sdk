import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderItemSchema, type OrderItem } from "./order-item.js";

export type TerminalOrderRequest = {
  /**
   * The identification of the billing entity to use for the order.
   *
   * > When ordering products in Brazil, you do not need to include the `billingEntityId` in the
   * request.
   */
  billingEntityId?: string;
  /** The merchant-defined purchase order reference. */
  customerOrderReference?: string;
  /** The products included in the order. */
  items?: OrderItem[];
  /** Type of order */
  orderType?: string;
  /** The identification of the shipping location to use for the order. */
  shippingLocationId?: string;
  /** The tax number of the billing entity. */
  taxId?: string;
};

export const terminalOrderRequestSchema: Schema<TerminalOrderRequest> = s.object<TerminalOrderRequest>({
  billingEntityId: s.optional(s.string()),
  customerOrderReference: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => orderItemSchema))),
  orderType: s.optional(s.string()),
  shippingLocationId: s.optional(s.string()),
  taxId: s.optional(s.string()),
});
