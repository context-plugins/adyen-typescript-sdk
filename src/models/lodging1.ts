import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Lodging1 = {
  checkInDate?: string;
  numberOfNights?: number;
};

export const lodging1Schema: Schema<Lodging1> = s.object<Lodging1>({
  checkInDate: s.optional(s.string()),
  numberOfNights: s.optional(s.number()),
});
