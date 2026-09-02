import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefendDisputeRequest = {
  defenseReasonCode: string;
  disputePspReference: string;
  merchantAccountCode: string;
};

export const defendDisputeRequestSchema: Schema<DefendDisputeRequest> = s.object<DefendDisputeRequest>({
  defenseReasonCode: s.string(),
  disputePspReference: s.string(),
  merchantAccountCode: s.string(),
});
