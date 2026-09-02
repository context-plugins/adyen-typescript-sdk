import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Surcharge = {
  value: number;
};

export const surchargeSchema: Schema<Surcharge> = s.object<Surcharge>({
  value: s.number(),
});
