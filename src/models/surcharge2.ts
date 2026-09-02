import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Surcharge2 = {
  value: number;
};

export const surcharge2Schema: Schema<Surcharge2> = s.object<Surcharge2>({
  value: s.number(),
});
