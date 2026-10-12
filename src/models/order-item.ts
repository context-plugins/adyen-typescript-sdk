import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderItem = {
  /** The unique identifier of the product. */
  id?: string;
  /** The number of installments for the specified product `id`. */
  installments?: number;
  /** The name of the product. */
  name?: string;
  /** The number of items with the specified product `id` included in the order. */
  quantity?: number;
};

export const orderItemSchema: Schema<OrderItem> = s.object<OrderItem>({
  id: s.optional(s.string()),
  installments: s.optional(s.int()),
  name: s.optional(s.string()),
  quantity: s.optional(s.int()),
});
