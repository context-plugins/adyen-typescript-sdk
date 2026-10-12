import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status you want to change to, The status of the sweep. If not provided, by default, this is
 * set to **active**.
 *
 * Possible values:
 *
 *  * **active**: the sweep is enabled and funds will be pulled in or pushed out based on the
 *    defined configuration.
 *
 *  * **inactive**: the sweep is disabled and cannot be triggered., The status of the transaction
 *    rule. If you provide a `startDate` in the request, the rule is automatically created with an
 *    **active** status.
 *
 * Possible values: **active**, **inactive**., The status of the webhook setting. Possible values:
 *
 * * **active**: You receive a balance webhook if any of the conditions in this setting are met.
 * * **inactive**: You do not receive a balance webhook even if the conditions in this settings are
 *   met., The status of the recurring top-up. If not provided, by default, this is set to
 *   **active**.
 *
 * Possible values:
 *
 *  * **active**: the top up is enabled and funds will be pulled in.
 *
 *  * **inactive**: the top up is disabled and cannot be triggered.
 */
export const Status6 = {
  Active: "active",
  Inactive: "inactive",
} as const;
export type Status6 = (typeof Status6)[keyof typeof Status6] | (string & {});

export const status6Schema: EnumSchema<Status6> = s.enumOf<Status6>(Status6);
