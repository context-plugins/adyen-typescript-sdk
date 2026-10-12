import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardOrderSchema, type CardOrder } from "./card-order.js";

export type PaginatedGetCardOrderResponse = {
  /** Contains objects with information about card orders. */
  cardOrders?: CardOrder[];
  /** Indicates whether there are more items on the next page. */
  hasNext: boolean;
  /** Indicates whether there are more items on the previous page. */
  hasPrevious: boolean;
};

export const paginatedGetCardOrderResponseSchema: Schema<PaginatedGetCardOrderResponse> =
  s.object<PaginatedGetCardOrderResponse>({
    cardOrders: s.optional(s.array(s.lazy(() => cardOrderSchema))),
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
  });
