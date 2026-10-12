import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SodexoInfo = {
  /** Sodexo merchantContactPhone */
  merchantContactPhone: string;
};

export const sodexoInfoSchema: Schema<SodexoInfo> = s.object<SodexoInfo>({
  merchantContactPhone: s.string(),
});
