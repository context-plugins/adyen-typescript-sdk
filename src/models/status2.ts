import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of your request.
 *
 * If you included `adjustAuthorisationData` in your request, possible values are the following:
 *
 * * **authorised**
 *
 * * **refused**
 *
 * Otherwise, the value is **received**.
 */
export const Status2 = {
  Authorised: "authorised",
  Received: "received",
  Refused: "refused",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
