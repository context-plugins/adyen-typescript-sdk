import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Moto1 = {
  enableMoto?: boolean;
  maxAmount?: number;
};

export const moto1Schema: Schema<Moto1> = s.object<Moto1>({
  enableMoto: s.optional(s.boolean()),
  maxAmount: s.optional(s.number()),
});
