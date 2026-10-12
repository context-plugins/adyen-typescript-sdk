import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** **sodexo** details */
export type SodexoResponseInfo2 = {
  /** Sodexo merchantContactPhone */
  merchantContactPhone?: string;
};

export const sodexoResponseInfo2Schema: Schema<SodexoResponseInfo2> = s.object<SodexoResponseInfo2>({
  merchantContactPhone: s.optional(s.string()),
});
