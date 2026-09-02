import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TokenRequestorsRestriction = {
  operation: string;
  value?: string[];
};

export const tokenRequestorsRestrictionSchema: Schema<TokenRequestorsRestriction> =
  s.object<TokenRequestorsRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.string())),
  });
