import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of instalment transaction. For requesting an instalment payment transaction. Possible
 * values:
 * * **DeferredInstalments**
 * * **EqualInstalments**
 * * **InequalInstalments**
 */
export const InstalmentType = {
  DeferredInstalments: "DeferredInstalments",
  EqualInstalments: "EqualInstalments",
  InequalInstalments: "InequalInstalments",
} as const;
export type InstalmentType = (typeof InstalmentType)[keyof typeof InstalmentType] | (string & {});

export const instalmentTypeSchema: EnumSchema<InstalmentType> = s.enumOf<InstalmentType>(InstalmentType);
