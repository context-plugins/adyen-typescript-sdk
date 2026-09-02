import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TokenRequestorsRestriction1 = {
  operation: string;
  value?: string[];
};

export const tokenRequestorsRestriction1Schema: Schema<TokenRequestorsRestriction1> =
  s.object<TokenRequestorsRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.string())),
  });
