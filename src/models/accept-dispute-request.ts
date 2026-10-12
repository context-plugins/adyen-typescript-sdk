import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AcceptDisputeRequest = {
  /** The PSP reference assigned to the dispute. */
  disputePspReference: string;
  /** The merchant account identifier, for which you want to process the dispute transaction. */
  merchantAccountCode: string;
};

export const acceptDisputeRequestSchema: Schema<AcceptDisputeRequest> = s.object<AcceptDisputeRequest>({
  disputePspReference: s.string(),
  merchantAccountCode: s.string(),
});
