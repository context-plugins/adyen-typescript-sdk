import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of terminal action: Install an Android certificate. */
export const Type42 = {
  InstallAndroidCertificate: "InstallAndroidCertificate",
} as const;
export type Type42 = (typeof Type42)[keyof typeof Type42] | (string & {});

export const type42Schema: EnumSchema<Type42> = s.enumOf<Type42>(Type42);
