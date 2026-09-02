import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BrandVariantsRestriction = {
  operation: string;
  value?: string[];
};

export const brandVariantsRestrictionSchema: Schema<BrandVariantsRestriction> =
  s.object<BrandVariantsRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.string())),
  });
