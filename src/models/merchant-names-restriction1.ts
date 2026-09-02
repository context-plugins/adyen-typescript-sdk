import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stringMatchSchema, type StringMatch } from "./string-match.js";

export type MerchantNamesRestriction1 = {
  operation: string;
  value?: StringMatch[];
};

export const merchantNamesRestriction1Schema: Schema<MerchantNamesRestriction1> =
  s.object<MerchantNamesRestriction1>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => stringMatchSchema))),
  });
