import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Settings = {
  band?: string;
  roaming?: boolean;
  timeout?: number;
};

export const settingsSchema: Schema<Settings> = s.object<Settings>({
  band: s.optional(s.string()),
  roaming: s.optional(s.boolean()),
  timeout: s.optional(s.number()),
});
