import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Settings1 = {
  band?: string;
  roaming?: boolean;
  timeout?: number;
};

export const settings1Schema: Schema<Settings1> = s.object<Settings1>({
  band: s.optional(s.string()),
  roaming: s.optional(s.boolean()),
  timeout: s.optional(s.number()),
});
