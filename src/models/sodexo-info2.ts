import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SodexoInfo2 = {
  merchantContactPhone: string;
};

export const sodexoInfo2Schema: Schema<SodexoInfo2> = s.object<SodexoInfo2>({
  merchantContactPhone: s.string(),
});
