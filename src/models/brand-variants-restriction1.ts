import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BrandVariantsRestriction1 = {
  operation: string;
  value?: string[];
};

export const brandVariantsRestriction1Schema: Schema<BrandVariantsRestriction1> =
  s.object<BrandVariantsRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.string())),
  });
