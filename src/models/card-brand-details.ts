import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardBrandDetails = {
  healthcare?: boolean;
  supported?: boolean;
  type?: string;
};

export const cardBrandDetailsSchema: Schema<CardBrandDetails> = s.object<CardBrandDetails>({
  healthcare: s.optional(s.boolean()),
  supported: s.optional(s.boolean()),
  type: s.optional(s.string()),
});
