import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { result1Schema, type Result1 } from "./result1.js";

export type ValidateShopperIdResponse = {
  reason?: string;
  result?: Result1;
};

export const validateShopperIdResponseSchema: Schema<ValidateShopperIdResponse> =
  s.object<ValidateShopperIdResponse>({
    reason: s.optional(s.string()),
    result: s.optional(s.lazy(() => result1Schema)),
  });
