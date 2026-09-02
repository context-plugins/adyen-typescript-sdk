import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderItemSchema, type OrderItem } from "./order-item.js";

export type TerminalOrderRequest = {
  billingEntityId?: string;
  customerOrderReference?: string;
  items?: OrderItem[];
  orderType?: string;
  shippingLocationId?: string;
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
