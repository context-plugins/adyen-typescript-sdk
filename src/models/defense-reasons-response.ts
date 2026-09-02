import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defenseReasonSchema, type DefenseReason } from "./defense-reason.js";
import { disputeServiceResult1Schema, type DisputeServiceResult1 } from "./dispute-service-result1.js";

export type DefenseReasonsResponse = {
  defenseReasons?: DefenseReason[];
  disputeServiceResult: DisputeServiceResult1;
};

export const defenseReasonsResponseSchema: Schema<DefenseReasonsResponse> = s.object<DefenseReasonsResponse>({
  defenseReasons: s.optional(s.array(s.lazy(() => defenseReasonSchema))),
  disputeServiceResult: disputeServiceResult1Schema,
});
