import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Standalone1 = {
  currencyCode?: string;
  enableGratuities?: boolean;
  enableStandalone?: boolean;
};

export const standalone1Schema: Schema<Standalone1> = s.object<Standalone1>({
  currencyCode: s.optional(s.string()),
  enableGratuities: s.optional(s.boolean()),
  enableStandalone: s.optional(s.boolean()),
});
