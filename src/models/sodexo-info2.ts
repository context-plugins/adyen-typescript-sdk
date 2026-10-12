import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details to provide if `type` is **sodexo**. */
export type SodexoInfo2 = {
  /** Sodexo merchantContactPhone */
  merchantContactPhone: string;
};

export const sodexoInfo2Schema: Schema<SodexoInfo2> = s.object<SodexoInfo2>({
  merchantContactPhone: s.string(),
});
