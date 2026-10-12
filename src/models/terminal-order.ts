import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingEntity1Schema, type BillingEntity1 } from "./billing-entity1.js";
import { orderItemSchema, type OrderItem } from "./order-item.js";
import { shippingLocation1Schema, type ShippingLocation1 } from "./shipping-location1.js";

export type TerminalOrder = {
  /** The details of the entity that the order is billed to. */
  billingEntity?: BillingEntity1;
  /** The merchant-defined purchase order number. This will be printed on the packing list. */
  customerOrderReference?: string;
  /** The unique identifier of the order. */
  id?: string;
  /** The products included in the order. */
  items?: OrderItem[];
  /**
   * The date and time that the order was placed, in UTC ISO 8601 format. For example,
   * "2011-12-03T10:15:30Z".
   */
  orderDate?: string;
  /** The details of the location where the order is shipped to. */
  shippingLocation?: ShippingLocation1;
  /** The processing status of the order. */
  status?: string;
  /** The URL, provided by the carrier company, where the shipment can be tracked. */
  trackingUrl?: string;
};

export const terminalOrderSchema: Schema<TerminalOrder> = s.object<TerminalOrder>({
  billingEntity: s.optional(s.lazy(() => billingEntity1Schema)),
  customerOrderReference: s.optional(s.string()),
  id: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => orderItemSchema))),
  orderDate: s.optional(s.string()),
  shippingLocation: s.optional(s.lazy(() => shippingLocation1Schema)),
  status: s.optional(s.string()),
  trackingUrl: s.optional(s.string()),
});
