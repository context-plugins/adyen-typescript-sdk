import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type81 = {
  UninstallAndroidCertificate: "UninstallAndroidCertificate",
} as const;
export type Type81 = (typeof Type81)[keyof typeof Type81] | (string & {});

export const type81Schema: EnumSchema<Type81> = s.enumOf<Type81>(Type81);
