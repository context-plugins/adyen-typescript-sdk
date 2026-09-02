import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UtilityResponse = {
  originKeys?: Record<string, string>;
};

export const utilityResponseSchema: Schema<UtilityResponse> = s.object<UtilityResponse>({
  originKeys: s.optional(s.record(s.string(), s.string())),
});
