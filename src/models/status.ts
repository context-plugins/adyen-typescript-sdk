import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Informs you if the name validation was performed. Possible values:
 *
 * **performed**, **notPerformed**, **notSupported**
 */
export const Status = {
  NotPerformed: "notPerformed",
  NotSupported: "notSupported",
  Performed: "performed",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
