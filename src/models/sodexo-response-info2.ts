import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SodexoResponseInfo2 = {
  merchantContactPhone?: string;
};

export const sodexoResponseInfo2Schema: Schema<SodexoResponseInfo2> = s.object<SodexoResponseInfo2>({
  merchantContactPhone: s.optional(s.string()),
});
