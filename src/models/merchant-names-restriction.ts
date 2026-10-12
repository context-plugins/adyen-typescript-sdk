import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stringMatchSchema, type StringMatch } from "./string-match.js";

export type MerchantNamesRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  value?: StringMatch[];
};

export const merchantNamesRestrictionSchema: Schema<MerchantNamesRestriction> =
  s.object<MerchantNamesRestriction>({
    operation: s.string(),
    value: s.optional(s.array(s.lazy(() => stringMatchSchema))),
  });
