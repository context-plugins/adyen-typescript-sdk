import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the specified `eventType` is sent to your webhook endpoint. Possible values:
 * * **INCLUDE**: Send the specified `eventType`.
 * * **EXCLUDE**: Send all event types except the specified `eventType` and other event types with
 *   the `includeMode` set to **EXCLUDE**.
 */
export const IncludeMode = {
  Exclude: "EXCLUDE",
  Include: "INCLUDE",
} as const;
export type IncludeMode = (typeof IncludeMode)[keyof typeof IncludeMode] | (string & {});

export const includeModeSchema: EnumSchema<IncludeMode> = s.enumOf<IncludeMode>(IncludeMode);
