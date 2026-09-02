import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
