import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the transfer.
 *
 * Possible values:
 *
 *  - **credited**: the funds are credited to your user's transfer instrument or bank account.-
 *    **accepted**: the request is accepted by the integration.
 */
export const Status15 = {
  Credited: "credited",
  Accepted: "accepted",
} as const;
export type Status15 = (typeof Status15)[keyof typeof Status15] | (string & {});

export const status15Schema: EnumSchema<Status15> = s.enumOf<Status15>(Status15);
