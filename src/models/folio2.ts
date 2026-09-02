import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folio2 = {
  cashAdvances?: number;
  number?: string;
};

export const folio2Schema: Schema<Folio2> = s.object<Folio2>({
  cashAdvances: s.optional(s.number()),
  number: s.optional(s.string()),
});
