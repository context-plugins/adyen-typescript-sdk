import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardOrderItemSchema, type CardOrderItem } from "./card-order-item.js";

export type PaginatedGetCardOrderItemResponse = {
  /** List of card order items in the card order batch. */
  data: CardOrderItem[];
  /** Indicates whether there are more items on the next page. */
  hasNext: boolean;
  /** Indicates whether there are more items on the previous page. */
  hasPrevious: boolean;
};

export const paginatedGetCardOrderItemResponseSchema: Schema<PaginatedGetCardOrderItemResponse> =
  s.object<PaginatedGetCardOrderItemResponse>({
    data: s.array(s.lazy(() => cardOrderItemSchema)),
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
  });
