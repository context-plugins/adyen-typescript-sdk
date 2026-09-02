import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataOnly = {
  False: "false",
  True: "true",
} as const;
export type DataOnly = (typeof DataOnly)[keyof typeof DataOnly] | (string & {});

export const dataOnlySchema: EnumSchema<DataOnly> = s.enumOf<DataOnly>(DataOnly);
