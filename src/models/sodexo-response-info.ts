import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SodexoResponseInfo = {
  /** Sodexo merchantContactPhone */
  merchantContactPhone?: string;
};

export const sodexoResponseInfoSchema: Schema<SodexoResponseInfo> = s.object<SodexoResponseInfo>({
  merchantContactPhone: s.optional(s.string()),
});
