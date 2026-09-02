import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SupportedCardTypes = {
  credit?: boolean;
  debit?: boolean;
  deferredDebit?: boolean;
  prepaid?: boolean;
  unknown?: boolean;
};

export const supportedCardTypesSchema: Schema<SupportedCardTypes> = s.object<SupportedCardTypes>({
  credit: s.optional(s.boolean()),
  debit: s.optional(s.boolean()),
  deferredDebit: s.optional(s.boolean()),
  prepaid: s.optional(s.boolean()),
  unknown: s.optional(s.boolean()),
});
