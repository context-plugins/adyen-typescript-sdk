import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the dispute.
 *
 * When you create a dispute, you can only set the `status` to **draft**. When you update a dispute,
 * you can set the `status` to **submitted** or **closed**.
 *
 * Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**,
 * **secondPresentment**.
 */
export const DisputeStatus1 = {
  Draft: "draft",
  Submitted: "submitted",
  Chargeback: "chargeback",
  SecondPresentment: "secondPresentment",
  Won: "won",
  Closed: "closed",
} as const;
export type DisputeStatus1 = (typeof DisputeStatus1)[keyof typeof DisputeStatus1] | (string & {});

export const disputeStatus1Schema: EnumSchema<DisputeStatus1> = s.enumOf<DisputeStatus1>(DisputeStatus1);
