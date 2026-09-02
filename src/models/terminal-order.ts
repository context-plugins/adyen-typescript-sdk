import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingEntity1Schema, type BillingEntity1 } from "./billing-entity1.js";
import { orderItemSchema, type OrderItem } from "./order-item.js";
import { shippingLocation1Schema, type ShippingLocation1 } from "./shipping-location1.js";

export type TerminalOrder = {
  billingEntity?: BillingEntity1;
  customerOrderReference?: string;
  id?: string;
  items?: OrderItem[];
  orderDate?: string;
  shippingLocation?: ShippingLocation1;
  status?: string;
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
