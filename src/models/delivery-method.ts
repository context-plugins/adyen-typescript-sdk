import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount24Schema, type Amount24 } from "./amount24.js";
import { type29Schema, type Type29 } from "./type29.js";

export type DeliveryMethod = {
  amount?: Amount24;
  description?: string;
  reference?: string;
  selected?: boolean;
  type?: Type29;
};

export const deliveryMethodSchema: Schema<DeliveryMethod> = s.object<DeliveryMethod>({
  amount: s.optional(s.lazy(() => amount24Schema)),
  description: s.optional(s.string()),
  reference: s.optional(s.string()),
  selected: s.optional(s.boolean()),
  type: s.optional(s.lazy(() => type29Schema)),
});
