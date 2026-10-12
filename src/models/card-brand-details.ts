import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardBrandDetails = {
  /** Indicates if the card supports FSA/HSA healthcare payments. */
  healthcare?: boolean;
  /** Indicates if you support the card brand. */
  supported?: boolean;
  /** The name of the card brand. */
  type?: string;
};

export const cardBrandDetailsSchema: Schema<CardBrandDetails> = s.object<CardBrandDetails>({
  healthcare: s.optional(s.boolean()),
  supported: s.optional(s.boolean()),
  type: s.optional(s.string()),
});
