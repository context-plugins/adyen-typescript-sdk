import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NativeThreeDs = {
  Preferred: "preferred",
  Disabled: "disabled",
} as const;
export type NativeThreeDs = (typeof NativeThreeDs)[keyof typeof NativeThreeDs] | (string & {});

export const nativeThreeDsSchema: EnumSchema<NativeThreeDs> = s.enumOf<NativeThreeDs>(NativeThreeDs);
