import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Gratuity = {
  allowCustomAmount?: boolean;
  currency?: string;
  predefinedTipEntries?: string[];
  usePredefinedTipEntries?: boolean;
};

export const gratuitySchema: Schema<Gratuity> = s.object<Gratuity>({
  allowCustomAmount: s.optional(s.boolean()),
  currency: s.optional(s.string()),
  predefinedTipEntries: s.optional(s.array(s.string())),
  usePredefinedTipEntries: s.optional(s.boolean()),
});
