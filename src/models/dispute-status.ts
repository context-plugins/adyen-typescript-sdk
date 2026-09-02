import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisputeStatus = {
  Draft: "draft",
  Submitted: "submitted",
  Chargeback: "chargeback",
  SecondPresentment: "secondPresentment",
  Won: "won",
  Closed: "closed",
} as const;
export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus] | (string & {});

export const disputeStatusSchema: EnumSchema<DisputeStatus> = s.enumOf<DisputeStatus>(DisputeStatus);
