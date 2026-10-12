import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UtilityResponse = {
  /**
   * The list of origin keys for all requested domains. For each list item, the key is the domain
   * and the value is the origin key.
   */
  originKeys?: Record<string, string>;
};

export const utilityResponseSchema: Schema<UtilityResponse> = s.object<UtilityResponse>({
  originKeys: s.optional(s.record(s.string(), s.string())),
});
