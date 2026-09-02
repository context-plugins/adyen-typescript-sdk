import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason11 = {
  RefusedForRegulatoryReasons: "refusedForRegulatoryReasons",
} as const;
export type Reason11 = (typeof Reason11)[keyof typeof Reason11] | (string & {});

export const reason11Schema: EnumSchema<Reason11> = s.enumOf<Reason11>(Reason11);
