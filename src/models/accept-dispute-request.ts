import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AcceptDisputeRequest = {
  disputePspReference: string;
  merchantAccountCode: string;
};

export const acceptDisputeRequestSchema: Schema<AcceptDisputeRequest> = s.object<AcceptDisputeRequest>({
  disputePspReference: s.string(),
  merchantAccountCode: s.string(),
});
