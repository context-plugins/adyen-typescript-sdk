import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SettingType = {
  Balance: "balance",
} as const;
export type SettingType = (typeof SettingType)[keyof typeof SettingType] | (string & {});

export const settingTypeSchema: EnumSchema<SettingType> = s.enumOf<SettingType>(SettingType);
