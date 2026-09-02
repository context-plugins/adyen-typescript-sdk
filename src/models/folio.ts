import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folio = {
  cashAdvances?: number;
  number?: string;
};

export const folioSchema: Schema<Folio> = s.object<Folio>({
  cashAdvances: s.optional(s.number()),
  number: s.optional(s.string()),
});
