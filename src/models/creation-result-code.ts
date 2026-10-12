import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Notification message. It informs about the outcome of the operation. Possible values:
 * * CREATED
 * * ALREADY_EXISTS
 * * ERROR
 */
export const CreationResultCode = {
  AlreadyExists: "ALREADY_EXISTS",
  Created: "CREATED",
  Error: "ERROR",
} as const;
export type CreationResultCode = (typeof CreationResultCode)[keyof typeof CreationResultCode] | (string & {});

export const creationResultCodeSchema: EnumSchema<CreationResultCode> =
  s.enumOf<CreationResultCode>(CreationResultCode);
