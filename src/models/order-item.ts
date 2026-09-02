import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderItem = {
  id?: string;
  installments?: number;
  name?: string;
  quantity?: number;
};

export const orderItemSchema: Schema<OrderItem> = s.object<OrderItem>({
  id: s.optional(s.string()),
  installments: s.optional(s.number()),
  name: s.optional(s.string()),
  quantity: s.optional(s.number()),
});
