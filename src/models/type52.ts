import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type52 = {
  PaybybankAisDd: "paybybank_AIS_DD",
} as const;
export type Type52 = (typeof Type52)[keyof typeof Type52] | (string & {});

export const type52Schema: EnumSchema<Type52> = s.enumOf<Type52>(Type52);
