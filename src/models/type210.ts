import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of terminal action. The value **ForceReboot** triggers an immediate reboot of the
 * specified terminal(s).
 */
export const Type210 = {
  ForceReboot: "ForceReboot",
} as const;
export type Type210 = (typeof Type210)[keyof typeof Type210] | (string & {});

export const type210Schema: EnumSchema<Type210> = s.enumOf<Type210>(Type210);
