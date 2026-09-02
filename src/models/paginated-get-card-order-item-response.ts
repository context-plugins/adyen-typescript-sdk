import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardOrderItemSchema, type CardOrderItem } from "./card-order-item.js";

export type PaginatedGetCardOrderItemResponse = {
  data: CardOrderItem[];
  hasNext: boolean;
  hasPrevious: boolean;
};

export const paginatedGetCardOrderItemResponseSchema: Schema<PaginatedGetCardOrderItemResponse> =
  s.object<PaginatedGetCardOrderItemResponse>({
    data: s.array(s.lazy(() => cardOrderItemSchema)),
    hasNext: s.boolean(),
    hasPrevious: s.boolean(),
  });
