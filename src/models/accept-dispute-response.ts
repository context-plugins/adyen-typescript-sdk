import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeServiceResult1Schema, type DisputeServiceResult1 } from "./dispute-service-result1.js";

export type AcceptDisputeResponse = {
  /** The result of the dispute service. */
  disputeServiceResult: DisputeServiceResult1;
};

export const acceptDisputeResponseSchema: Schema<AcceptDisputeResponse> = s.object<AcceptDisputeResponse>({
  disputeServiceResult: disputeServiceResult1Schema,
});
