import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standalone = {
  currencyCode?: string;
  enableGratuities?: boolean;
  enableStandalone?: boolean;
};

export const standaloneSchema: Schema<Standalone> = s.object<Standalone>({
  currencyCode: s.optional(s.string()),
  enableGratuities: s.optional(s.boolean()),
  enableStandalone: s.optional(s.boolean()),
});
