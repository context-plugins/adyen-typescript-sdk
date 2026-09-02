import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Moto = {
  enableMoto?: boolean;
  maxAmount?: number;
};

export const motoSchema: Schema<Moto> = s.object<Moto>({
  enableMoto: s.optional(s.boolean()),
  maxAmount: s.optional(s.number()),
});
