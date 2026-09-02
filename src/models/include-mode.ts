import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeMode = {
  Exclude: "EXCLUDE",
  Include: "INCLUDE",
} as const;
export type IncludeMode = (typeof IncludeMode)[keyof typeof IncludeMode] | (string & {});

export const includeModeSchema: EnumSchema<IncludeMode> = s.enumOf<IncludeMode>(IncludeMode);
