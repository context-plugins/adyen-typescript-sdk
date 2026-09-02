import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UtilityRequest = {
  originDomains: string[];
};

export const utilityRequestSchema: Schema<UtilityRequest> = s.object<UtilityRequest>({
  originDomains: s.array(s.string()),
});
