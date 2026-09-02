import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BalancePlatform = {
  description?: string;
  id: string;
  status?: string;
};

export const balancePlatformSchema: Schema<BalancePlatform> = s.object<BalancePlatform>({
  description: s.optional(s.string()),
  id: s.string(),
  status: s.optional(s.string()),
});
