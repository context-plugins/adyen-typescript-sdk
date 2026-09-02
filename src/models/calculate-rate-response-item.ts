import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount22Schema, type Amount22 } from "./amount22.js";
import { amount34Schema, type Amount34 } from "./amount34.js";

export type CalculateRateResponseItem = {
  appliedExchangeRate?: number;
  exchangeSide?: string;
  sourceAmount?: Amount22;
  targetAmount?: Amount34;
  type?: string;
};

export const calculateRateResponseItemSchema: Schema<CalculateRateResponseItem> =
  s.object<CalculateRateResponseItem>({
    appliedExchangeRate: s.optional(s.number()),
    exchangeSide: s.optional(s.string()),
    sourceAmount: s.optional(s.lazy(() => amount22Schema)),
    targetAmount: s.optional(s.lazy(() => amount34Schema)),
    type: s.optional(s.string()),
  });
