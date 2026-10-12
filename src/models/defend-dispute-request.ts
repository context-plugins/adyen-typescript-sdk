import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefendDisputeRequest = {
  /** The defense reason code that was selected to defend this dispute. */
  defenseReasonCode: string;
  /** The PSP reference assigned to the dispute. */
  disputePspReference: string;
  /** The merchant account identifier, for which you want to process the dispute transaction. */
  merchantAccountCode: string;
};

export const defendDisputeRequestSchema: Schema<DefendDisputeRequest> = s.object<DefendDisputeRequest>({
  defenseReasonCode: s.string(),
  disputePspReference: s.string(),
  merchantAccountCode: s.string(),
});
